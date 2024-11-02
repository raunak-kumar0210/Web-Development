let para = document.createElement("p");
para.innerText = "Hey I am Red!";
document.querySelector("body").append(para);
para.classList.add("red");

let H3=document.createElement("h3");
H3.innerText="I am blue H3!";
document.querySelector("body").append(H3);
H3.classList.add("blue");

let div1=document.createElement("div");
document.querySelector("body").append(div1);
div1.classList.add("box");


let H1=document.createElement("h1");
let para1 = document.createElement("p");

H1.innerText="I am in div!";
para1.innerText = "Hey I aam in div";

div1.append(H1);
div1.append(para1);

let inp=document.createElement("input");
inp.placeholder="Username";
document.querySelector("body").append(inp);

let btn=document.createElement("button");
btn.innerText="click me";
btn.id="btn";
document.querySelector("body").append(btn);

document.querySelector("#btn").classList.add("btnq3");

let newH1=document.createElement("h1");
newH1.innerText="DOM Practice";
newH1.style.textDecoration="underline";
document.querySelector("body").append(newH1);
newH1.classList.add("purple");

let para2 = document.createElement("p");
para2.innerHTML = "Apna College <strong>Delta</strong> Practice";
document.querySelector("body").append(para2);
