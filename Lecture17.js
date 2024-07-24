
// ES5 is  functionally scope (var)
 // ES6 is BLock scope(let , const)
 
// var abc=10;

//Scoping
 function testing(){
   var abc=20;
   let def =100;
 console.log(abc);
 //BLOCK SCOPE
   if(1){
   let xyz='block scoped';
   console.log('Inside If',xyz);
   console.log(abc);
      }
   console.log('Outside If',xyz);
 }
testing(); // call  a function

 var name='CIpher_Schools' ;
 let year=2024; // Global SCope
  function test(){
  console.log(name);
  console.log(year);
  }
  test();
//  FUNCTION DECLARATION AND FUNCTION EXPRESSION
//hoisitng is a very important concent in js which means when we save a func in a variable it doesnt gets hoisted

myFunc();
myFunc2();
  function myFunc(){
   console.log("Inside myfunction  decleration");
  }
let myFunc2=function(){console.log("Inside myFunc2 function expression");}

console.log(name2);
console.log(name);
nmae();//naem isnt a function so unable to access the 
var name2="LPU";
 // let name="Pratham Thkaur";
LET CONST VARIABLE EXPRESSION DO NOT GET HOISTED
var name=function(){
 console.log("hello");
}
//ES6 has introduced the concept of arrow function 
//this-Conttext
let myLPu=()>{
 console.log("NAAC A++");
  console.log(this);
}
myLPu();
let myLLPu=function(){
  console.log("NBA");
  console.log(this);
}
myLLPu();
//this is the way of mentioning the 
//parameter and argument
let dara=(name,age)=>{ //parameter
 console.log(name);
 console.log(age);
}
dara('Pratham',22); // argument











  
