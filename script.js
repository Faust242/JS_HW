const textArea = document.body.appendChild(document.createElement('textarea'));
const btn = document.body.appendChild(document.createElement('button'));

btn.style.width = '50px';
btn.style.height = '30px';
btn.innerHTML = 'Go' 

textArea.style.width = '200px';
textArea.style.height = '100px';
textArea.setAttribute('message', 'name');

const validationText= function(message){
    message = message.toLowerCase()
    let messageArr = message.trim('').split(' ');
    for (let i=0; i<messageArr.length; i++){
        let tempIndex = messageArr[i].indexOf('_')+1;
        let tempArr = [...messageArr[i]];
        let capitalLetter =tempArr[tempIndex].toUpperCase();
        let splitVariable =messageArr[i].split('_');
        let sliceFirstLetter = splitVariable[1].slice(1,splitVariable[1].length)
        let joinCapitalLetter = capitalLetter+sliceFirstLetter
        let element = '✅'
        let camelCaseVariable = (splitVariable[0]+joinCapitalLetter).padEnd(20, ' ')+element.repeat(i+1);
        console.log(camelCaseVariable)
    }
}

btn.addEventListener('click', ()=>{
    let message = textArea.value;
    validationText(message)
    
})

// underscore_case first_name Some_Variable calculate_AGE delayed_departure




