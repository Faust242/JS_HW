// First task

// 1.1
// С помощью метода массива map преобразуйте массив чисел в массив булевых значений.
// Принцип преобразования следующий: если число больше 0, в итоговый массив записывается true, если меньше - false.
function changingArr (arr){
  arr.map(function(item, i){
    if (item >= 0) {
        arr[i] = true
      } else if (item < 0 ){
        arr[i] = false
      }
   })
   return arr
}
console.log(changingArr([1, 2, -10, -2, 7])) // [1, 2, -10, -2, 7]; // -> [true, true, false, false, true]


// 1.2
// Дан массив пользователей (в примере ниже)
// Напишите функцию, которая с помощью комбинации методов массива filter и map будет возвращать массив имен взролых (старше 18 лет) администраторов (role === 'admin').
const users = [
  {
    name: 'Sam',
    role: 'admin',
    age: 25,
  },
    {
    name: 'Peter',
    role: 'admin',
    age: 16,
  },
    {
    name: 'Pablo',
    role: 'admin',
    age: 32,
  },
    {
    name: 'Enrico',
    role: 'client',
    age: 43,
  },
    {
    name: 'Mary',
    role: 'client',
    age: 34,
  },
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
  },
]
const adultAdmins = (arr) =>{
  let newArr= []
  arr.filter(function(item, i) {
    if (item.age >=18 && item.role === 'admin'){
      newArr.push(item.name)
    }
  })
  return newArr
}
console.log(adultAdmins(users))  // [Sam, Pablo]



// 1.3
// Дан массив чисел
// С помощью метода reduce вычислите среднее арифметическое чисел в массиве.
// const numbers = [1, 10, 17, 24, 45]
function average(arr){
  let result = arr.reduce(function(sum, curr){
    return (sum+curr)
  })
  return result/arr.length
}
console.log(average([1, 10, 17, 24, 45, 100]))


//Second task
// 2.1
  const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
  };
  const ownForEach = function(arr, callBackFunction){
      for (let i=0; i<arr.length; i++) {
          callBackFunction(arr[i], i, arr)
      }
      
  }
  ownForEach([1, 2, 3, 7, 10, 12], logger);

// 2.2
  const increment = (number) => number + 1;
  const ownMap = function(arr, callBackFunction){
      for (let i=0; i<arr.length; i++) {
          arr[i] = callBackFunction(arr[i]);
      }
      return arr
  }
  console.log(ownMap([1, 2, 3], increment)); // [2, 3, 4]

//2.3
  const isNegative = (number) => number < 0;
  const ownFilter = function(arr, callBackFunction){
      let arrNew =[]
      for (let i=0; i<arr.length; i++){
          if (callBackFunction(arr[i])) {
              arrNew.push(arr[i])
          }
      }
      return arrNew
  }
  console.log(ownFilter([-2, 4, -1], isNegative)); // [-2, -1]




//Third task
const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: true,
    },
    {
      name: "Peter",
      age: 24,
      position: "middle",
      isActive: true,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];   
  const filterData = (dataArr, obj) =>{
    for (let key in obj){
            dataArr = dataArr.filter((item) => item[key] === obj[key])     
              }
   return dataArr
}

console.log(filterData(data, { age: 24, isActive: true }));
console.log(filterData(data, { age: 19}));
console.log(filterData(data, { position: 'middle', age: 24}));  