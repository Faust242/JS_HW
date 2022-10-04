'use strict'

// First task
const userNum1 = Number(prompt('Put your first number, pls'));
const userNum2 = Number(prompt('Put your second number, pls'));

if (userNum1 > userNum2) alert(`First number: ${userNum1} is bigger than second number: ${userNum2}`)
else if (userNum1 < userNum2) alert(`First number: ${userNum1} is lower than second number: ${userNum2}`)
else alert(`First number: ${userNum1} and second number: ${userNum2} are equal`)

// Second task
const calcNum1 = Number(prompt('first number'));
const calcNum2 = Number(prompt('second number'));   
let result; 
const operation = prompt('What kind of Math operation do you want: +, -, *, /');

switch (operation){
    case '+':
        result = calcNum1+calcNum2;
        alert(`Result of operation ${operation} is : ${result}`);
    break;
    case '-':
        result = calcNum1-calcNum2;
        alert(`Result of operation ${operation} is : ${result}`);
    break;
    case '*':
        result = calcNum1*calcNum2;
        alert(`Result of operation ${operation} is : ${result}`);
    break;
    case '/':
        result = calcNum1/calcNum2;
        alert(`Result of operation ${operation} is : ${result}`);
    break;
}

// Third task
const userAge = Number(prompt('How old are you?'));  
if ((userAge<18&&userAge>=12) || (userAge>=60&&userAge<=80)) {
    const confirmParents = confirm('Did adults allow you to go to attraction or not?')
        confirmParents ? alert('You could enter to attraction. Ypu are welcome'): alert('You couldn\'t enter to attraction');
}else if(userAge<60&&userAge>=18)  alert('You could enter to attraction. You are welcome!')
    else  alert('You couldn\'t enter to attraction');




