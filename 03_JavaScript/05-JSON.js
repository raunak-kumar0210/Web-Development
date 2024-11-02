// let jsonRes = '{"message": "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_4741.jpg"}';
// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.message);

// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//         console.log(data);
//     })
// })
// .catch((err) => {
//     console.log(err);
// })

//more refactored code

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json()
// })
// .then((data) => {
//         console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

// let url="https://catfact.ninja/fact";

// async function getData(){
//     let res=await fetch(url);
//     console.log(res);
//     let validData=await res.json();
//     console.log(validData);
// }

// we  can use try and catch for better readability
// async function getData(){
//     try{
//         let res=await fetch(url);
//     console.log(res);
//     let validData=await res.json();
//     console.log(validData);
//     }
//     catch (e){
//         console.log("Error:",e)
//     }
// }


//Using Axios
// let url="https://catfact.ninja/fact";
// async function getData(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch (e){
//         console.log("Error:",e)
//         return ("No fact found");
//     }
// }

// let btn=document.querySelector("#btn1");
// let para=document.querySelector("p");

// //creating a function was unnesssary
// function fillData()
// {
//     btn.addEventListener("click", async () => {
//         let fact= await getData();
//         para.innerHTML= fact;
//         console.log(fact);
        
//     })
// }

// getData();
// fillData();

// //Dog image
// let url2="https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch (e){
//         console.log("Error:",e)
//         return ("No image found");
//     }
// }

// let btn2=document.querySelector("#btn2");
// let dogImg = document.querySelector("#dogImg");

// //creating a function was unnesssary
// btn2.addEventListener("click", async () => {
//     let link= await getImage();
//     dogImg.setAttribute("src",link);
    
// });

// getImage();

// const url="https://icanhazdadjoke.com";

// async function getJokes()
// {
//     try{
//         const header={headers: {Accept : "application/json"}};
//         let res=await axios.get(url,header);
//         console.log(res.data.joke);
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
// }

// getJokes();

// let url="http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let country=document.querySelector("input").value;
//     console.log(country);

//     let collegesArr = await getColleges(country);
//     show(collegesArr);
// });

// function show(collegesArr){
//     let list=document.querySelector("#clgList");
//     clgList.innerText="";
//     for(let college of collegesArr){
//         console.log(college.name);
//         let li=document.createElement("li");
//         li.innerText=college.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res=await axios.get(url + country);
//         return res.data;
//     } 
//     catch(e){
//         console.log("error:",e);
//         return [];
//     }
// }
