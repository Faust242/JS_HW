// First task

function nameValidation(question, wrongAnswer){
    let bool =true;
    let normalName;
    do{
    let userName = prompt(question).trim();
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
        let userPassword= prompt("Enter password").trim();
        let lowCasePassword = userPassword.toLowerCase();
        let upperCasePassword = userPassword.toUpperCase();
        if ((isNan(userPassword) || userPassword.length<6 || userPassword === lowCasePassword || userPassword === upperCasePassword) && (userPassword !== null)){
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

const cube = {
    parameters: {
        width: '1000px',
        height: '500px',
    },
    type: 'rectangle',
    quantity: 3,
    angles: 4
}


const makeDeepClone = (obj) => {
    const clone = {};
    console.log('obj',obj);
      for (let key in obj){
        if (typeof obj[key] !== 'object'){
            clone[key] = obj[key];
        } else {
            clone[key] =makeDeepClone(obj[key]);
        }
      }
      return clone;
}

const cubeDeepClone = makeDeepClone(cube);
console.log('cubeDeepClone',cubeDeepClone);
console.log('cube',cube);

function getTimeFromMinutes(minutes) {
    if (minutes <0){
        return console.log('Ошибка, проверьте данные')
    }
    let hours = 0;
    hours = Math.floor(minutes/60);
    minutes = minutes%60;
    return console.log(`Это ${hours} часов и ${minutes} минут`)
}
getTimeFromMinutes(150)
getTimeFromMinutes(50)
getTimeFromMinutes(0)
getTimeFromMinutes(-150)

function findMaxNumber(a, b, c, d) {
    let maxNum;
    let arrNum = [a, b,c,d];
    for (let i = 0; i<arrNum.length-1; i++){
        if (arrNum[i]>arrNum[i+1] && (typeof arrNum[i] !== 'string') && (typeof arrNum[i+1] !== 'string')) { maxNum = arrNum[i]} 
        else if (arrNum[i]<=arrNum[i+1] && (typeof arrNum[i] !== 'string') &&(typeof arrNum[i+1] !== 'string')) { maxNum = arrNum[i+1] }
        else { maxNum = 0}
    }
    return maxNum
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'))


function fib(num) {
    let fibNum = [];
   if (typeof num == 'string' || num === 0){
       return num = '';
   }
   fibNum[0] = 0;
   fibNum[1] = 1 ;
   if (num === 1){
       return String(fibNum[0]);
   }
   for (let i=2; i<num; i++){
       fibNum[i] = fibNum[i-1]+fibNum[i-2];
   }
   return fibNum.join(' ');
}

console.log(fib('1 2 3 4 5 6'));

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            python: '15%',
        },
        exp: '1 month'
    },
    showAgeAndLangs() {
        let str = ' ';
        let strLang = '';
        let lang = [...this.skills.languages]
        for (let i=0; i<lang.length; i++){
         
            
            strLang =  `${lang[i].toUpperCase()} ` + strLang;
            console.log(lang[i])
        }
       
       
        str = `Мне ${this.age} и я владею языками: `+ strLang;
        return str
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
//'Мне 29 и я владею языками: RU ENG'

function showProgrammingLangs(plan) {
    str = '';
    const {programmingLangs} = plan.skills;
    if (programmingLangs === undefined) {
        return str
    }
    for (let key in programmingLangs){
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str
}

console.log(showProgrammingLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = ''
   if (arr == undefined || arr == null ){
        str = 'Семья пуста'
        return str;}
    else  if (arr.length>0){
        str = 'Семья состоит из: ';
        
        return str =str+arr.join().replace(/,/g,' ');
    } else return str = 'Семья пуста'
        
}

console.log(showFamily([ ]));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    return str = arr.join().replace(/,/g,'\n').toLowerCase()
}

console.log(standardizeStrings(favoriteCities))




const someString = 'This is some strange string';

function reverse(str) {
    let strNew = '';
    let position ;
    if (typeof str != 'string'){
        return console.log('Ошибка')
    } else {
        for (let i=0; i<str.length; i++){
            position = str.length-1-i
            strNew += str[position];
        }
        return  console.log(strNew)
    }
}

reverse([]);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    // for (let i=0; i<arr.length; i++){
    //     arr[i] !== missingCurr? str += `${arr[i]}\n`: str = str;
    // }
   
    arr.forEach(function(curr, i){
        curr !== missingCurr? str += `${curr}\n`: str = str;
    })
        return str;
    }


console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'RUB'));


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    // areaShops: function () {
    //     let area= 0;
    //     this.shops.forEach((item,i) =>{
    //         area += item.width*item.length           
    //     }          
    //     )
    //     return area;
    // },
    // volumeShoppingMall(area){
    //    return area*this.height;
    // },

}

// function isBudgetEnough(data) {
//     let costsUtilities = data * shoppingMallData.moneyPer1m3;
//     let str = ';'
//     // console.log(costsUtilities)
//     if ( costsUtilities<= shoppingMallData.budget){
//         return str ='Бюджета достаточно';
//     } else {
//         return str = 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData.volumeShoppingMall(shoppingMallData.areaShops()))

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Samiii'];

function sortStudentsByGroups(arr) {
   
    let newArr = [];
    let str =''
    arr = arr.sort();

    // console.log(arr)
    let quantityTeams = Math.floor(arr.length/3)

    for (let i = 0; i<quantityTeams; i++){
        newArr[i] = arr.slice(0, 3);
        arr = arr.slice(3);
        // console.log(newArr[i])
    }
   
    if (arr == null || arr == undefined || arr.length <1 ){
        str = `Оставшиеся студенты: -`
    } else if(arr.length>1 ){
        str = (`Оставшиеся студенты: ${arr}`).replace(',', ', ');}
        else {
    str = `Оставшиеся студенты: ${arr}`;}
    // console.log(str)
    // console.log(newArr)
    arr = newArr.push(str)
   

    return newArr

}

console.log(sortStudentsByGroups(students));


const objN = {
    a: 120,
    b: 100,
    c: {
        x: 15,
        y: 25
    }
}

const cloneObj = function(obj){
    const  clone = {};
 
    for (let key in obj){
        if (typeof obj[key] !== 'object'){
            clone[key] = obj[key]
        } else {
            clone[key]= cloneObj(obj[key]);
            

        }
    }
    return clone;
}


const newObj = cloneObj(objN);
    newObj.c.x =1000;

    console.log(newObj);
    console.log(objN);



    const arrayNew = [5,[1,3,[10,15, [15,50,100]]],10,16,[8,5,6],8,25,20,21];

    const slimArray = function(arr, result = []){
        
       for (let el of arr){
           if (!Array.isArray(el)) {
            console.log(result)
           result.push(el)}
           else { 
           slimArray(el, result)
            // slimArr.push(slimArray(el), slimArr)

           }
        }
       
        return result
    }

    console.log(slimArray(arrayNew))


    
    // const arrNew = [5,7,10,16,2,1,8,25,20,21];
    // const arrNew = [ 2, 10];
    const elementMinMax= function(arr){
        const elMinMax = {max: arr[0], 
                        min: arr[0]};
       for (let i in arr){
       
            if (elMinMax.max < arr[i]) {
                elMinMax.max  = arr[i];
           
            } ;
            if (elMinMax.min  > arr[i]) {
                elMinMax.min  = arr[i];
              
            } 
       }
     return elMinMax
    }
    // console.log(elementMinMax(arrNew));

    buyers = [1,5,2,5,3,11,9];
    checkBoxes = 2;

    const queueTime = function (buyers, checkBoxes){
        if (!buyers.length){
            return 0
        }
        const checkPoints = [];
        const restQueue = [];

        for (let i = 0; i<buyers.length; i++){
            const currentBuyer = buyers[i];
            if (i<checkBoxes){
                checkPoints.push(currentBuyer);
                console.log('current - ', checkPoints);
            }   else {
                restQueue.push(currentBuyer);
                console.log('rest -',restQueue)
            }
           
        }
        for (let i=0; i<restQueue.length; i++){
            const shortestQueue = elementMinMax(checkPoints).min;
            const currentBuyerTime = restQueue[i]
           
            for (let j=0; j<checkPoints.length; j++){
               
                if ( checkPoints[j]=== shortestQueue){
                    checkPoints[j] += currentBuyerTime;
                }
            }
            // console.log('checkpoints',checkPoints)
        }
        return elementMinMax(checkPoints).max
    }

    console.log(queueTime([10,2,3,x13,5,7,2,3], 3))