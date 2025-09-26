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
const myPromise = new Promise((resolve, reject) => {
   const password="7869gh#$"; 
    if (password.length>8) {
        resolve("Password length is ok");
    } else {
        reject("Password length is not as per our policy");
    }
});

// myPromise.then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{console.log(err)})
// .finally(()=>{
//     console.log("All the resources have closed successfully")
// })

 async function handleData(){
    const data= await myPromise;
}
handleData();