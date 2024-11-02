const mongoose = require("mongoose");
const Chat = require('./models/chat.js'); 

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};


let allChats = [
    {
        from: "Neha",
        to: "Priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "Lets go party ",
        created_at: new Date(),
    },
    {
        from: "samit",
        to: "amit",
        msg: "Teach me java",
        created_at: new Date(),
    },
    {
        from: "Rahul",
        to: "Amit",
        msg: "Teach me JS",
        created_at: new Date(),
    }
]

Chat.insertMany(allChats);
