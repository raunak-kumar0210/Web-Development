const express = require("express");
const app = express();
const path = require("path"); //requiring path as it is a package 

const port= 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"/views")); //to set it so that the server searches for the templates in "view" folder not in the directory from which the server starts 

app.get("/", (req,res) =>{
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/rolldice", (req,res) =>{
    res.render("rolldice.ejs");
});

// app.get("/ig/:username", (req,res) =>{
//     let followers = ["abc","xyz","pqrs","mno"];
//     const username = req.params;
//     res.render("instagram.ejs",  { username: username, followers: followers });
// });

app.get("/ig/:username", (req,res) =>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    res.render("instagram.ejs", {data});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

