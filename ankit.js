const prompt = require("prompt-sync")();
let firstNum = prompt("enter first number: ");
let secondNum= prompt("enter second number: ");;
let counter = Math.random();
function wellCalculator(x,y) {
    console.log("Addition: ",(+x)+(+y));
    console.log("Substract: ",x-y);
    console.log("Multiply: ",x*y);
    console.log("Divide: ",x/y);
}
function faultyCalculator(x,y) {
    console.log("Addition: ",x-y);
    console.log("Multiply: ",(+x)+(+y));
    console.log("Substract: ",x/y);
    console.log("Divide: ",x**y);
}
console.log(firstNum);
console.log(secondNum);
if(counter>0.1){
    wellCalculator(firstNum,secondNum);
   
}else{
    faultyCalculator(firstNum,secondNum);
}