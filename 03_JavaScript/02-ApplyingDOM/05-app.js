let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let del_btn = document.createElement("button");
    del_btn.innerText = "Delete";
    del_btn.classList.add("delete");
    
    item.appendChild(del_btn);
    list.appendChild(item);
    inp.value = "";
});

let ulist = document.querySelector("ul");
ulist.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let par=event.target.parentElement;
        par.remove();
        console.log("Deleted !");
    }
})

// // Attach delete event listeners to existing delete buttons
// let del_btns = document.querySelectorAll(".delete");
// for (let del_btn of del_btns) {
//     del_btn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     });
// }
