const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res) => {
//     // console.log(req);
//     console.log("request received");
    // res.send("this is a basic response");
    // res.send ({
    //     name: "apple",
    //     color: "red",
    // });

    
    // res.send("<h1>Fruits</h1><ul><li>apple</li><li>Banana</li></ul>");
    // });


    // app.get("/", (req,res) =>{
    //     res.send("you contacted root path");
    //     // res.send("hello i am root");
    // })

    // app.get("/apple", (req,res) =>{
    //     res.send("you contacted apple path");
    // })

    // app.get("/orange", (req,res) =>{
    //     res.send("you contacted orange path");
    // })

    // app.get("/mango", (req,res) =>{
    //     res.send("you contacted mango path");
    // })


    app.get("/", (req,res) => {
        res.send("hello i am root");
    });

    app.get("/:username/:id",(req,res) => {
        let {username,id} =req.params;
        let htmlStr = `<h1>welcome to the page of @${username}`;
        res.send(htmlStr);
    })

    app.get("/search",(req,res) => {
        console.log(req.query);
        res.send("no results");
    })