const form = document.createElement('form')
const startBtn = document.createElement('button');
const stopBtn = document.createElement('button');
const inputTimer = document.createElement('input');
const div = document.createElement('div');

startBtn.innerText = 'START';
stopBtn.innerText = 'STOP';
inputTimer.setAttribute('type','number');
inputTimer.setAttribute('placeholder','seconds');
document.body.append(form);
form.append(startBtn, stopBtn, inputTimer, div);

let intervalId;
let count=0;

function renderTimer(timer){
    seconds = Math.floor(timer % 60);
    minutes = Math.floor(timer/60 % 60);
    hours =   Math.floor(timer/60/60 % 60);
    if (hours <10) hours = `0${hours}`;
    if (minutes <10) minutes = `0${minutes}`;
    if (seconds <10) seconds = `0${seconds}`;
    div.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`
}

function start(e){
    e.preventDefault();
    if (inputTimer.value){
        count = inputTimer.value
    } else count;
    inputTimer.value = '';
    if (!intervalId){
        intervalId = setInterval(()=>{
        renderTimer(count);
        --count;
        if (count <0){
            clearInterval(intervalId)
        }
    }, 1000)}
}

function stop(e){
    e.preventDefault()
    clearInterval(intervalId)
    intervalId = undefined;
    if (count >1){
        startBtn.addEventListener('click', start)
    }
}

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)




/////////////////////////////////////////////
// const div = document.createElement('div');
// document.body.append(div);
// const btn = document.createElement('button');
// btn.innerHTML = 'Change color';
// div.append(btn);

//  const changeColor = (el, color, delay) => {
//     return new Promise((resolve) => 
//         setTimeout(()=> {
//             el.style.backgroundColor = color;
//             resolve()
//         }, delay))
//     }
    
// async function changing(){
//     await changeColor(div, 'orange', 1000)
    
//     await changeColor(div, 'black', 1000)
  
//     await changeColor(div, 'red', 1000)
   
//     await changeColor(div, 'yellow', 1000)
   
//     await changeColor(div, 'green', 1000)
 
//     await changeColor(div, 'olive', 1000)
    
//     await changeColor(div, 'blue', 1000)
// }

// changing()


// const Car = function(make, speed){
//    this.speed = speed;
//    this.make = make;
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed} km/h`)
// }
// Car.prototype.break = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed} km/h`)
// }
// bmw.accelerate();
// bmw.break();

// class CarClass {
//     constructor(make, speed){
//         this.speed = speed;
//         this.make = make;
//     }

//     accelerate () {
//         this.speed += 10;
//         console.log(`${this.make} is going ${this.speed} km/h`)
//     }

//     break () {
//         this.speed -= 5;
//         console.log(`${this.make} is going ${this.speed} km/h`)
//     }

//     get speedUS(){
//         return this.speed/1.6
//     }

//     set speedUS(speed){
//         this.speed = speed*1.6;
//     }
//  }

//  const ford = new CarClass('Ford', 120)
//  console.log(ford.speedUS);

//  ford.speedUS = 60;
//  console.log(ford)



//// HTTPRequest
// const userXhr = new XMLHttpRequest()
// userXhr.onreadystatechange = ()=>{
//     const {readyState} = userXhr;
//     console.log(readyState)
// }
// userXhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
// userXhr.send();
// userXhr.onload = ()=>{
//     const result =JSON.parse(userXhr.response)
//     console.log(result)
// }
// console.log(userXhr)
 
