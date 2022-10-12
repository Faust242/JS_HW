// First task

function nameValidation(question, wrongAnswer){
    let bool =true;
    let normalName;
    do{
    let userName = prompt(question);
    if (userName === null || userName =='' || userName == ' '){
        alert(wrongAnswer)
    } else if (typeof userName === 'string'){
        firstLetter = userName.slice(0,1);
        normalName = firstLetter.toUpperCase() + userName.toLowerCase().slice(1,userName.length);
        return normalName;
    } 
    } while (bool)
}
function passValidation (){
    let  bool = true;
    do{
        let userPassword= prompt ("Enter password")
        let lowCasePassword = userPassword.toLowerCase();
        if ((userPassword.length<6 || userPassword === lowCasePassword) && (userPassword !== null)){
            alert('Password have to be more than 6 characters, and include upper case and lower case. TRY AGAIN!!!');
        } else return userPassword;
    } while (bool);
}

function loginValidation(){
        let userName = nameValidation('What is your name?', 'Enter your name, please');
        let userSurname = nameValidation('What is your surname?', 'Enter your surname, please');
        let userPassword = passValidation();
        alert(`${userName} ${userSurname}, Welcome to our website, your password: ${userPassword}`)
}


loginValidation();   

// Second task
randomNum = (a,b)  =>  c=Math.floor(Math.random()*(b-a+1))+a;

console.log(randomNum(3,9));
console.log(randomNum(5,10));