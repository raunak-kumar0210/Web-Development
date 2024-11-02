const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path=require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Onepiece$g5',
});

let getRandomUser = () =>  {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// //Inserting new data
// let q= "INSERT INTO user (id,username,email,password) VALUES ?";
// // let user = ["123","123_newuser","abc@gmail.com","abc"];

// let data = [];
// for(let i = 1; i<=100; i++)
// {
//   data.push(getRandomUser());
// }


// let getRandomUser = () =>  {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }


//home route
app.get("/",(req,res) => {
  let q = "SELECT count(*) FROM user;";
  try{
    connection.query(q, (err,result) => {
        if(err) throw err;
        let count = (result [0] ["count(*)"]);
        res.render("home.ejs" , {count});
    });
    }
    catch (err){
        console.log(err);
        res.send("some error in database")
    }
});


//show route
app.get("/user", (req,res) => {
  let q= `SELECT *FROM user`;
  try{
    connection.query(q, (err,users) => {
        if(err) throw err;

        res.render("showusers.ejs", {users});
    });
    }
    catch (err){
        console.log(err);
        res.send("some error in database")
    }

});

//Edit route
app.get("/user/:id/edit", (req,res) => {
  let { id } =req.params;
  let q = 'SELECT * FROM user WHERE id = ?'; //very problematic
  try{
    connection.query(q, [id], (err,result) => {
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs", {user});
        
    });
    }
    catch (err){
        console.log(err);
        res.send("some error in database");
    }
});


//update (DB) route
app.patch("/user/:id" , (req,res) => {
  let { id } =req.params;
  let {password: formPass , username: newUsername} = req.body;
  let q = 'SELECT * FROM user WHERE id = ?'; 

  try{
    connection.query(q,[id] ,(err,result) => {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.PASSWORD){
          res.send("WRONG password!");
        } 
        else{
          let q2 = 'UPDATE user SET username = ? WHERE id = ?';
          connection.query(q2,[newUsername , id], (err,result) => {
            if (err) throw err;
            res.redirect("/user");
          })
        } 
         
    });
    }
    catch (err){
        console.log(err);
        res.send("some error in database");
    }  
})

app.listen("8080", () => {
  console.log(`server is listening to port 8080`);
}) 