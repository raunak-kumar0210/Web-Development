console.log("Hello World");

let arr=[1,2,3,4,5];

function print(el){
    console.log(el);
}
arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
});

let tentimes=arr.map(function(el) {
    console.log(el*10);
});

let tentimes2=arr.map(function(el) {
    return(el*10);
});
console.log(tentimes2);

let even=arr.filter(el=>(el%2==0));
console.log(even); 

let even1=arr.every(el=>(el+2));
console.log(even1); //wrong logic code

let even2=arr.reduce((res,el)=>(res+el));
console.log(even2); //wrong logic code

let even3=arr.filter(el=>(el+2));
console.log(even3); //wrong logic code

function func(a,b=2){
    return a+b;
}

console.log(func(2));

let str="apnacollege";
console.log(...str);

let v=Math.min(...arr);
console.log(v);

console.log(...arr);

let newarr=[...arr];
console.log(newarr);

let data={
    email:"ironman@gmail.com",
    password:"abc",
};
let datacopy={...data};
console.log(datacopy);

let names=["raunak","rani","raushan"];
let[winner,losser] = names;
console.log(winner,losser);

const student={
    name:"raunak",
    roll_no:31,
    age:21,
};
const {name:n,age:a}=student;
console.log(n,a);
const {name,age}=student;
console.log(name,age);

document.addEventListener("keypress", function(){
    console.log("Game started");
});