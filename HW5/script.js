
// First task
const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorization = () =>{
    let userLogin;
    let userPassword;
    // let booleanNum = true;
    let attempts =3
   for(let i=0; i<attempts; i++){
    userLogin = prompt(`You have ${attempts-i} attempts`,'Your login');
        if (userLogin === null){
            alert('You need to Login');
           continue
        }
    userPassword = prompt(`You have ${attempts-i} attempts`, 'Your password');
        if (userPassword === null){        
            alert('You need to write password')
            continue
        }
        if (userLogin === LOGIN && userPassword === PASSWORD){
            alert('YOU ARE WELCOME!')
            break
            // console.log(userLogin, userPassword)
        }
        if (userLogin !== LOGIN && userPassword !== PASSWORD){
            alert('Login or Password is incorrect! TRY IT AGAIN')
            continue
        }
    }
};


// Second task

const primeNum = (a,b) => {
    if (a>1){
    mark:
    for (let i = a; i<=b; i++){

        for (let j = 2; j<i; j++){
            if (i%j === 0) {
              continue mark;
            }
        }
        console.log(i);
    }
    } else {
        a=2;
        mark:
        for (let i = a; i<=b; i++){
    
            for (let j = 2; j<i; j++){
                if (i%j === 0) {
                  continue mark;
                }
            }
            console.log(i);
        }
    }
}
primeNum(1,12);