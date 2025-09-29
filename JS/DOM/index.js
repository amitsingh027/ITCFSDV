// const container = document.getElementsByClassName("container");

// const h2 = document.createElement("h2");
// h2.innerText = "ABES Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);

// const button = document.getElementById("btn");
// console.log(button);

// function msg() {
//     container[0].innerHTML = "";

//     const loadingMsg = document.createElement('p');
//     loadingMsg.innerText = "Loading Image...";
//     loadingMsg.style.color = "blue";
//     loadingMsg.style.fontSize = "20px";
//     container[0].appendChild(loadingMsg);
//     setTimeout(() => {
//         container[0].innerHTML = "";
        
//         const img = document.createElement('img');
//         img.src = "download.jpg";
//         img.setAttribute("height", "200px");
//         img.setAttribute("width","200px");
//         console.log(img);
//         container[0].appendChild(img);

//         const h3 = document.createElement('h3');
//         h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
//         h3.style.color = "yellow";
//         h3.style.backgroundColor = "red";
//         container[0].appendChild(h3);
//     }, 3000); 
// }
// button.addEventListener("click", msg);


//Blocking and Non-Blocking code

// const button = document.getElementById("btn");
// function longData(){
//     console.log("Start")
//     for(i=0;i<10000000;i++){
//         console.log(i)
//     }
//     console.log("End")
// }
// button.addEventListener('click',longData)


// console.log("start")
// setTimeout(()=>{
//     console.log("Welcome to FSD")
// },2000)
// console.log("end")

//CallBack Function

// function greetmsg(myname){
// return "Hii," + myname + "Welcome to abes college";
// }

// function msgHandler(msg,CallBack){
//     // console.log(msg);
//    const data= CallBack(msg);
//    return data;
// }
// const student=["Rahu","Aman","Amit"];
// student.forEach((name)=>{
//  console.log( msgHandler(name,greetmsg))
// })
// const completemsg=  msgHandler("Hii",greetmsg);
// console.log(completemsg)


//PROMISE
// const myPromise = new Promise((resolve, reject) => {
//    const password="7869gh#$"; 
//     if (password.length>8) {
//         resolve("Password length is ok");
//     } else {
//         reject("Password length is not as per our policy");
//     }
// });

// myPromise.then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{console.log(err)})
// .finally(()=>{
//     console.log("All the resources have closed successfully")
// })

//  async function handleData(){
//     const data= await myPromise;
// }
// handleData();




//FETCH API


    // var recipe = jsonData.recipes[0];
    // disp.innerHTML = "<h2>ID: "+ recipe.id +"</h2>" +
    //                  "<h2>Name: "+ recipe.name +"</h2>" +
    //                  "<img src='"+ recipe.image +"' alt='"+ recipe.name + "'width='200'>";
    
//  const button = document.getElementById("btn");
// const disp = document.getElementById("disp");
// let table = '<table border="1">';
// async function fetchData() {
//     disp.innerHTML = "<h2>Data is Loading...</h2>";
//     const response = await fetch('https://dummyjson.com/recipes');
//     const jsonData = await response.json();
//     console.log(jsonData);
//     jsonData.recipes.forEach(Element => {
//        table += `<tr>
//        <td><img src='${Element.image}' height=200 width=200 alt='image'></td>
//        <td>${Element.id}</td>
//        <td>${Element.name}</td>
//        <td>${Element.ingredients}</td>
//        </tr>`;
//     });
//     table += '</table>';
//     disp.innerHTML = table;
// }

// const style = document.createElement('style');
// style.innerHTML = `
//     table {
//         border-collapse: collapse;
//         width: 100%;
//         margin-top: 20px;
//         font-family: Arial, sans-serif;
//         box-shadow: 0 0 15px rgba(0,0,0,0.1);
//     }
//     table th, table td {
//         padding: 10px;
//         text-align: left;
//         border: 1px solid #ccc;
//     }
//     table th {
//         background: linear-gradient(45deg, #ff6a00, #ee0979);
//         color: white;
//         font-size: 16px;
//     }
//     table tr:nth-child(even) {
//         background-color: #f090a8ff;
//     }
//     table tr:hover {
//         background-color: #d40d17ff;
//     }
//     h2 {
//         color: #ee0979;
//         font-family: Arial, sans-serif;
//     }
// `;
// document.head.appendChild(style);

// button.addEventListener('click', fetchData);


// fetch use Data
const button = document.getElementById("btn");
const disp = document.getElementById("disp");
let table = '<table border="1">';
async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/users'); // fetch users data
    const jsonData = await response.json();
    console.log(jsonData);
    jsonData.users.forEach(user => {
        table += `<tr>
            <td><img src="${user.image}" alt="User Image" width="100" height="100"></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.maidenName}</td>
            <td>${user.age}</td>
        </tr>`;
    });
    table += '</table>';
    disp.innerHTML = table;
}

button.addEventListener('click', fetchData);
