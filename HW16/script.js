
let visitCount;
const greeting = document.createElement('div');
const counterDisplay = document.createElement('div');
if (localStorage.getItem('counters') !== 'null'){
    visitCount = +localStorage.getItem('counters')
} else visitCount = 0;
visitCount++;
localStorage.setItem('counters', JSON.stringify(visitCount));
greeting.innerHTML = '<h1>You are Welcome!</h1>';
visitCount==1? counterDisplay.innerHTML = '': counterDisplay.innerHTML = `<h2>You are visiting web ${visitCount} times</h2>`;
document.body.append(greeting)
document.body.append(counterDisplay);
// localStorage.clear()
  
  


