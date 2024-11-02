let btn=document.querySelector(".events2");
btn.addEventListener("click", function(){
    let randomcolor=getRandomColor();
    document.querySelector(".events1").innerText=randomcolor;
    document.querySelector(".events3").style.backgroundColor=randomcolor;

    console.log("color updated");
});

function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    
    let color= `rgb(${red} ${green} ${blue})`;
    return color;
}