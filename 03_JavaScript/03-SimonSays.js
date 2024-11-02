let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green","blue"];
let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false)
        {
            console.log("Game started");
            started = true;
        }
    levelUP();
});

function gameFlash(btn)
{
    // console.log(btn);
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUP()
{
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx)
{
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelUP,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}<b/> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function ()
        {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=0;
    gameseq = [];
    userseq = [];
    level = 0;
}