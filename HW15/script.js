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

const createMessage = (obj) => {
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};
const message = createMessage("Peter", "Hello", "Sam", new Date());

console.log(message)
// после выполнения этого задания, функция должна коректно работать с таким аргументом
// const message = createMessage({
//   reciever: "John",
//   text: "Hi!",
// });
