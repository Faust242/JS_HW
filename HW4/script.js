'use strict'

// First task
function sum1(a,b){
    return a+b;
}
console.log(sum1(2,5));

let sum2 = (a,b) => {
   return a+b
}
console.log(sum2(2,10));

let sum3 = function(a,b){
    return a+b
}
console.log(sum2(23,10));

//Second task
function askUser(){
    const userName = prompt('What is your name?');
    const userAge = Number(prompt('What is your name?'));
    if (userAge<=30) alert(`Hello, ${userName}. Happy to meet you!`)
    else alert(`Good afternoon, ${userName}. Glad to meet you!`);
}
askUser()

//Third task
function exponentFunc(a, b = 2){
    return a**b;
}
const exponent = exponentFunc(7);
console.log(exponent);

console.log(exponentFunc(2,8));
