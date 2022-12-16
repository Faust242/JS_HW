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



