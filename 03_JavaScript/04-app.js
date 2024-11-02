// h1 =document.querySelector("h1");

// function changeColor(color,delay,nextChangeColor)
// {
//     setTimeout(() =>{
//         h1.style.color=color;
//         if(nextChangeColor)nextChangeColor();
//         },delay)};

// changeColor("red",1000,() =>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000,() =>{

//         });
//     });
// });




h1 =document.querySelector("h1");

function changeColor(color,delay)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num= Math.floor(Math.random()*5)+1;
            if (num<3){
                reject("promise rejected");  
            }

            h1.style.color=color;
            console.log(`color changed to ${color}` );
            resolve("color changed!");
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        changeColor("yellow",1000);
    }
    catch (err) {
        console.log("error caught");
        console.log(err);
    }
    
}
demo();
    
// changeColor("red",1000)
// .then(() => {
//     console.log("red color was implemented");
//     return changeColor("orange",1000);
// })
// .then(() => {
//     console.log("orange color was implemented");
//     return changeColor("green",1000);
// })
// .then(() => {
//     console.log("green color was implemented");
//     return changeColor("blue",1000);
// })
// .then(() => {
//     console.log("blue color was implemented");
//     return changeColor("pink",1000);
// })
// .then(() => {
//     console.log("pink color was implemented");
//     return changeColor("yellow",1000);
// })



// changeColor();

// function saveToDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10 +1);
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDB(
//     "apna college", 
//     () => {
//         console.log("success: Your data was saved");
//     saveToDB("Hello World" , 
//     () => {
//         console.log("success2: data saved");
//         saveToDB("Third level" , () => {
//             console.log("success3: data saved");
//         }, () => {
//             console.log("failure3: weak connection");
//         });
//         },
//     () => {
//         console.log("failure2: weak connection");
//         }
//     )},
//     () => {
//         console.log("failure: weak connection");
//     }
// );

// function saveToDB(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed=Math.floor(Math.random()*10+1);
//         if(internetSpeed > 4){
//             resolve("success: Data saved"); //results 
//         }else{
//             reject("failure: weak connection"); //error reason
//         }

//     });
// }

// saveToDB("apna college")
// .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise: ",result);
//     return saveToDB("Hello World");
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise: ",result);
//     return saveToDB("third level");
// })
// .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise: ",result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log("result of error: ",error);
// })

// async function greet(){
//     // throw "Error 404";
//     return "hello";
// }

// greet()
// .then((result) => {
//     console.log("result was:",result);
// })

// .catch((error) => {
//     console.log("error was:",error);
// })

// function getNum()
// {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num= Math.floor(Math.random()*10) +1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// demo();