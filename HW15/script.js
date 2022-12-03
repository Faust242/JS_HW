// First task
const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

//   total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.

const {meta: {paging: {total: newTotal}}} = response;
console.log(newTotal)

const {data: [{is_active: isActive}= firstDataObj, ...otherData]} = response;
console.log(isActive)

//Second task
const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

//   Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.

const {name, surname, ...parameters} = user;
console.log(name);
console.log(surname);
console.log(parameters);

//Third task

const max = (a, b) => {
    return a > b ? a : b;
  };
//   Переделайте функцию max таким образом, что бы она принимала любое количество аргументов 
//   (при условии, что все они являются числами, и возвращала максимальное из них). P.S. В данной задаче нельзя использовать Math.max()

const newMaxFunction = (...arr) => {
  return arr.reduce((a,b) => {
    return a<b? a = b: a;
  })
}
console.log(newMaxFunction(2,3,4,5,1,3,10,1,2,15,24,5,5,6,4,2,2))

//Fourth task
// Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, а один объект. 
// Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time

const createMessage = ({ author = 'Guest', text, reciever, time = new Date()}) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
  };
  
//   const message = createMessage({author: "Peter", text: "Hello", reciever: "Sam", time: new Date()});
// после выполнения этого задания, функция должна коректно работать с таким аргументом
const message = createMessage({
  reciever: "John",
  text: "Hi!",
});
console.log(message)


// Fifth task
//5.1
// Напишите регулярное выражение, которое находит подстроки с такими свойствами:
// начинается с буквенного символа
// заканчивает на буквенный символ
// между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
// для строки str результат должен быть следующий: 
// [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]

console.log(str.match(/\w[\d]+\w/g))    


// 5.2Напишите регулярное выражение для валидации домена (адреса сайта)
// Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
// то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ ., 
// заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
// используйте метод test



const testResult = /^[-a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/

const strings = [
    'ex.ua',
    'google.com',
    'yandex.ru',
    'site.com.ua',
    'my-page.com',
    's.com.ua',
    'my.c',
    'm_y.c0'
]

console.log(strings.slice(1,3))
console.log(strings)

console.log(strings.splice(2,1,'chess.com'))
console.log(strings)

for (let s of strings) {
    const re = new RegExp(testResult)
    console.log(s+": "+testResult.test(s))
}

// console.log(testResult.test('kkkkk.ua'))
// console.log(testResult.test('google.com'))
// console.log(testResult.test('yandex.ru'))
// console.log(testResult.test('site.com.ua'))
// console.log(testResult.test('my-page.com'))
// console.log(testResult.test('s.com.ua'))
// console.log(testResult.test('my.c'))
// console.log(testResult.test('m_y.c0'))

//5.3
// Напишите регулярное выражаение, которое проверяет строку:
// строка не должна содержать ничего кроме числовых символов
// длина строка должна быть не менее 12, но можно и больше

const strReg = /\d{12,}/gm


const userMax = {age: 42, 
                name: 'Max', 
                status: 'Single', 
                gender: 'Male'}


for (let key in userMax){
    console.log(key, userMax[key])
}



const greet = name => `Hey ${name}`;
console.log(greet("Hagrid")) //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames = fullNames.map((name) => {
   return name.first
})
console.log(firstNames)

function validUserNames(usernames) {
    return usernames.filter((name) => {
        return name.length<10

    })
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']))


// Задание:

// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, 
// аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. 
// Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

// Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

//         amountOfPages(5) => 5

//         amountOfPages(25) => 17

//         amountOfPages(1095) => 401   

//         amountOfPages(185) => 97

const amountOfNumbers = (pages) => {
  const numbers = [];
  for (let i=1; i<=pages; i++){
    let arr = i+''
    console.log(arr.length)
    for (let j = 0; j<arr.length; j++){
      numbers.push(j);
  }}
  return numbers.length
}
console.log(amountOfNumbers(401))

const amountOfPages = (numbers) =>{
  if (numbers<=10) pages = numbers 
  if (numbers>10 && numbers<100){
   pages = 9+((numbers - 9))/2}
  if (numbers>=100 && numbers<1000){
    pages = 54 + (numbers - 99)/2
  }
  if (numbers>=1000 && numbers<10000){
    pages = 9+((numbers - 9))/2
  }
  return pages
}

console.log(amountOfPages(889))