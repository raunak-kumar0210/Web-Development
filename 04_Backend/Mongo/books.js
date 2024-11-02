const mongoose = require('mongoose');

main()
.then( () => {
    console.log("connection successful");
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        maxlength:50,
    },
    author: {
        type:String,
    },
    price: {
        type:String,
         min:1,
    },
    discount: {
        type:Number,
        default:0,
    },
    category: {
        type:String,
        enum: ["fiction" , "Non-fiction"],
    },
});

const Book = mongoose.model("Book" , bookSchema);

let book1 = new Book({
    title: "mathematics XII",
    author: "RD Sharma",
    price: 1000,
});

let book2 = new Book({
    title: "Physics XII",
    author: "RD Sharma",
    price: 1200,
});

let book3 = new Book({
    title: "Chemistry XII",
    author: "RD Sharma",
    price: 1500,

});

let book4 = new Book({
    title: " Harry Potter and the Chamber of Secrets",
    author: "JK Rowling",
    price: 500,
    category:"fiction",
});

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// book2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// book3.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

book4.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

Book.find().then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err)
})