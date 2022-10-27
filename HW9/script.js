// First task

// 1.1
// С помощью метода массива map преобразуйте массив чисел в массив булевых значений.

// Принцип преобразования следующий: если число больше 0, в итоговый массив записывается true, если меньше - false.

// [1, 2, -10, -2, 7]; // -> [true, true, false, false, true]

function changingArr (arr){
  let newArr =[];
  arr.map(function(item, i){
    if (item >= 0) {
        newArr[i] = true
      } else if (item < 0 ){
        newArr[i] = false
      }
   })
   return newArr
}
console.log(changingArr([1, 2, -10, -2, 7]))


// 1.2
// Дан массив пользователей (в примере ниже)

// Напишите функцию, которая с помощью комбинации методов массива filter и map будет возвращать массив имен взролых (старше 18 лет) администраторов (role === 'admin').


const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
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
    const keyArr = [];
    const itemArr =[];
    let newData =[];
    let result = [];
// поиск ключей? которые подходят под условия
        for (let key in obj){
          newData = dataArr.filter((item) => item[key] === obj[key])     
          keyArr.push(key);  
          itemArr.push(obj[key])
        }
//проверка, что все ключи совпадают 
        newData.forEach((item, i) => {
            for (let j=0; j<keyArr.length; j++){
           if (item[keyArr[j]]===itemArr[j] && item[keyArr[i]]===itemArr[i]) {
            result.push(item)
           }
        } 
        })      
// проверка дубликатов
        return result.filter((it, index) => index === result.indexOf(it));     
}
    

  console.log(filterData(data, { age: 23 }));
  // [
  //     {
  //         "name": "Steve",
  //         "age": 23,
  //         "position": "middle",
  //         "isActive": true
  //     }
  // ]

  console.log(filterData(data, { age: 24 }));
  // [
  //     {
  //         "name": "John",
  //         "age": 24,
  //         "position": "senior",
  //         "isActive": false
  //     },
  //     {
  //         "name": "Mary",
  //         "age": 24,
  //         "position": "middle",
  //         "isActive": false
  //     }
  // ]
  
console.log(filterData(data, { age: 19, position: "junior" }));
  // [
  //     {
  //         "name": "Sally",
  //         "age": 19,
  //         "position": "junior",
  //         "isActive": false
  //     }
  // ]
  // то есть, функция вернула массив со всеми работниками на позиции junior и всеми работниками, которым 19 лет

  
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

console.log(average([1, 10, 17, 24, 45]))


//Second task
    const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
    };

    const ownForEach = function(arr, callBackFunction){
        for (let i=0; i<arr.length; i++) {
            callBackFunction(arr[i], i, arr)
        }
        
    }
    ownForEach([1, 2, 3, 7, 10, 12], logger);


    const increment = (number) => number + 1;
    const ownMap = function(arr, callBackFunction){
        let arrNew = [];
        for (let i=0; i<arr.length; i++) {
            arrNew[i] = callBackFunction(arr[i]);
        }
        return arrNew
    }
    console.log(ownMap([1, 2, 3], increment)); // [2, 3, 4]


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




   