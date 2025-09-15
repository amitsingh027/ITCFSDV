// console.log("Hello world!");
// var a=20;
// console.log("a ="+a);

// console.log(a );
// var a=20;

// let a=50;
// if(a>10){
//     let a=100;
//     console.log("a ="+a);
// }else{
//     console.log("hjjjiiiii");
// }
// console.log("hiii"+a);




// const a=23;
// a=50;
// console.log("a ="+a);


//Normal function
// function fun(msg){
//     return "Hello world!"+msg;
// }
// const data=fun("greetings");
// console.log(data);



//function as an expression
// const data=function(a,b){
//     return a*b;
// }
// console.log(data(5,6));



//Arrow function
// const data=(msg)=>{
//     console.log("Hey...using arrow function"+msg);
// }
// data("in react development");


// const data=msg=>msg;
// const output=data("Greeting of the day");
// console.log(output);


//IIFE - Immediately invoked function expression
//  (function(){
// console.log("Welcome to MERN Session");
// })();


// setTimeout(()=>{
//     console.log("Welcome to MERN Session");
// },5000);


// function greet(msg="Java"){
//     console.log(msg+" is a good language");
// }
// greet("python");


// function selectlanguage(msg="python"){
function selectlanguage(lang) {
    let result;
    if (lang == "Java") {
        function javaCompiler() {
            return "Using java compiler";
        }
        result = javaCompiler();
    } else if (lang == "c") {
        function cCompiler() {
            return "Using c compiler";
        }
        result = cCompiler();
    } else {
        result = "No compiler found";
    }
    return result;
}
// }}
console.log(selectlanguage("Java"));
console.log(selectlanguage("c"));  
console.log(selectlanguage("Python")); 
