const mongoose = require('mongoose');

main()
.then( () => {
    console.log("connection successful");
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User" , userSchema);

// User.findOne({age: {$gt: 30}}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err)
// })

// User.find({age: {$gt: 30}}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err)
// })

// User.findOne({_id:'66eaa5166f6a1816f35561a6'}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err)
// })

// User.findById('66eaa5166f6a1816f35561a6').then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err)
// })


// User.insertMany([
//   {name:"Tony", email: "tony@gmail.com", age:50},
//   {name:"Bruce", email: "Bruce@gmail.com", age:40},
//   {name:"Peter", email: "Peter@gmail.com", age:30},
// ]).then((res) =>{
//   console.log(res);
// }) 


// const user1 = new User({
//   name:"adam",
//   email:"adam123@yahoo.in",
// });

// const user2 = new User({
//   name:"eve",
//   email:"eve123@yahoo.in",
// });

// user1.save() 
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// user2.save();


// User.updateOne({name:"Bruce"},{age:45}).then((res) => {
//   console.log(res);
// })

// User.updateMany({age: {$gte:45}} , {age:40}).then((res) => {
//   console.log(res);
// });

// User.findOneAndUpdate({name:"Tony"}, {age:60}, {new:true}).then((data) => {
//   console.log(data);
// });


// User.deleteOne({name:"Bruce"}).then((data) => {
//   console.log(data);
// });

// User.deleteMany({age: {$gte:45}}).then((res) => {
//   console.log(res);
// });