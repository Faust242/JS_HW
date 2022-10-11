function validationName(){
    let bool = true;
    
    do{
    let nameValue = prompt('What is your name?');
    if (nameValue === null || nameValue=='' || nameValue !== ' '){
        alert('Enter your name, please')
        continue;
    } else if (typeof nameValue === 'string'){
        alert(nameValue);
        console.log(nameValue)
        bool = false;  
    }
    let surnameValue = prompt('What is your surname?');
    if (surnameValue === null || surnameValue=='' || surnameValue !== ' '){
        alert('Enter your surname, please')
        continue;
    } else if (typeof  surnameValue === 'string'){
        alert(surnameValue);
        console.log(surnameValue)
        bool = false;  
    }


    let password= prompt ("Enter password")
    } while (bool);

}

validationName();   