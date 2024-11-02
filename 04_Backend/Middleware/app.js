const express = require ("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req,res,next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req,res,next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        throw new ExpressError(401 , "ACCESS DENIED!");
    }
};

app.get("/api", checkToken, (req,res) =>{
    res.send("data");
});

app.get("/" , (req,res) => {
    res.send("Hi, I am root.");
});

app.get("/random" , (req,res) => {
    res.send("this is random page.");
});

app.get("/err", (req,res) => {
    abcd=abcd;
});

app.get("/admin" , (req,res) => {
    throw new ExpressError(403, "Access to admins is fobidden!")
})

app.use((err,req,res,next) => {
    let {status = 500 ,message = "Some Error Occured"} = err;
    res.status(status).send(message);
    // next(err); //calls next error handling middleware
   
});

//logger 
// app.use((req,res,next) => {
//     req.responseTime= new Date(Date.now()).toString();
//     console.log(req.method, req.path , req.responseTime, req.hostname);
//     next();
// });

//404
// app.use((req,res) => {
//     res.send("page not found!");
// });

app.listen(8080 , () => {
    console.log("server listening to port 8080");
});