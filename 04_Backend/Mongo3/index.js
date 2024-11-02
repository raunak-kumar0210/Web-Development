const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require('./models/chat.js');  // Adjust path accordingly
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

//Index route
app.get("/chats", asyncWrap(async  (req,res) => {
        let chats= await Chat.find();
        res.render("index.ejs", {chats});
}));

//New route
app.get("/chats/new" ,(req,res) => {
    // throw new ExpressError (404,"page not found!");
    res.render("new.ejs");
});

function asyncWrap(fn) {
    return function(req,res,next) {
        fn(req,res,next).catch(err => next(err));
    }
}

// // Create route
// app.post("/chats" , (req,res) => {
//     let {from, to, msg} = req.body;
//     let newChat = new Chat ({
//         from: from,
//         to: to,
//         msg: msg,
//         created_at: new Date()
//     });
//     newChat.save()
//     .then((res)  => {
//         console.log("chat was saved");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     res.redirect("/chats");
// });    //Error was occuring bcoz we did not define create function as async 

//Create route
app.post("/chats", asyncWrap( async (req, res) => {
    let { from, to, msg } = req.body;

    let newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
        await newChat.save();
        console.log("Chat was saved");
        res.redirect("/chats");
}));


//New - Show route
app.get("/chats/:id" , asyncWrap( async (req,res,next) => {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if (!chat){
            next( new ExpressError(404 , "Chat not found!"));
        }
        res.render("edit.ejs", {chat});
}));

//Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req,res) => {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs" , {chat});
}));


//Update route
app.put("/chats/:id" , asyncWrap(async(req,res) =>{
        let {id} = req.params;
        let {msg : newMsg} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            {msg : newMsg},
            {runValidators : true , new : true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
}));

//Destroy Route
app.delete("/chats/:id" , asyncWrap(async(req,res) => {
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
}));

app.get("/" , (req,res) => {
    res.send("root is working");
});

const handleValidationErr = (err) => {
    console.log("This was a Validation Error. Please follow rules");
    console.dir(err.message);
    return err;
};

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
});

//Error Handling Middleware
app.use((err,req,res,next) => {
    let {status=502 , message= "Some error occured"} = err;
    res.status(status).send(message);
});


app.listen(8080 , () => {
    console.log("server is listening to port: 8080");
});