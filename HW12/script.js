function createToolTip(element, hint){
    const hintDiv = document.createElement('div');
    hintDiv.style.position = 'absolute';
    hintDiv.textContent = hint;
    document.body.append(hintDiv);
    hintDiv.style.color = 'white';
    hintDiv.style.backgroundColor ='grey';
    hintDiv.style.height ='30px';
    const y= element.getBoundingClientRect().top;
    const x= element.getBoundingClientRect().left;
    const elemWidth  = getComputedStyle(element).width;
    const hintHeight  = getComputedStyle(hintDiv).height;
    const hintWidth  = getComputedStyle(hintDiv).width ;
    let top = `${y - Number.parseFloat(hintHeight)-10}px`;
    const left = `${x + ((Number.parseFloat(elemWidth))-Number.parseFloat(hintWidth))/2}px`;
    hintDiv.style.top= top;
    hintDiv.style.left= left;
  
}

const btn = document.createElement('button');
btn.style.border = '3px solid';
btn.style.borderRadius = '5px'
btn.style.margin = '200px 400px'
btn.style.width ='90px'
btn.style.height ='40px'
btn.innerHTML = 'Button'
document.body.append(btn)

let hint = 'It"s very important hint'

createToolTip(btn,hint)




// const now = new Date()
// console.log(`${now.getDate()}`.padStart(2, 0))
// console.log(now.getMonth())
// console.log(now.getFullYear())

// const formatTime = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`

// console.log(formatTime)

// const calcDatesPassed = (date1, date2) => Math.abs(date2 - date1)

// console.log(calcDatesPassed((new Date(2022, 12, 27)), (new Date(2022, 12, 20)))/(1000*60*60*24))

// const current = new Intl.DateTimeFormat('en-GB').format()
// const option ={
//     hour: 'numeric',
//     minute: 'numeric',
//     day: '2-digit',
//     month: 'short'
// }

// console.log(current)

// console.log(Intl.DateTimeFormat('en-GB', option).format(new Date()))

// const ingredients = ['Olives', 'Spinach']
// const timerFuncOut = setTimeout((ing1, ing2) => {
//     console.log(`Here is your pizza ${ing1} and ${ing2} 🍕`)
// }, 2000, ...ingredients)

// console.log('Wait...')

// if (ingredients.includes('Spinach')) clearTimeout(timerFuncOut)

// setInterval((ing1, ing2) => {
//     console.log(`Here is your pizza ${ing1} and ${ing2} 🍕`)
// }, 6000

// )

// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// }



// setInterval(()=>console.log(Intl.DateTimeFormat(new Date(), options).format()), 1000)


// html = `<form  action="get">
// <div>
//     <label for="username">Username</label>
//     <input type="text" placeholder="username" id="username">
// </div>    
// <div>
//     <label for="password">Password</label>
//     <input type="password" placeholder="password" >
// </div>    
// <div>
//     <button>Register</button>
// </div>
// </form>`

//         const divNew = document.createElement('div')
//         document.body.append(divNew)
    
//         document.body.insertAdjacentHTML('afterbegin',html);
