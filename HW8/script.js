

// First task

const countTrue = (booleanArr) => {
    counter = 0;
    booleanArr.forEach((item) =>{
       if (item){
        counter++;
       }
    })
    return counter
}

console.log(countTrue([true, false, false, true, false, true, true])); // -> 2
console.log(countTrue([false, false, false, false])); // -> 0
console.log(countTrue([])); // -> 0



// Second task

const getOccurrencesCount = (arr) => {
    const newObj = {};       
    for (let i in arr){     
        newObj[arr[i]] = 0
        for (let j in arr){
            if (arr[i]===arr[j]){
            newObj[arr[i]] += +1;
        } 
        }
    }
    return newObj;
}
console.log(getOccurrencesCount(["a", "v", "a", "b", "b", "a", "b", "b", "a", "v", ]));
// {
//   a: 2,
//   v: 1,  
//   b: 2,
// }

console.log(getOccurrencesCount([
  "apples",
  "oranges",
  "pears",
  "pears",
  "apples",
  "oranges",
  "oranges",
  "pears",
]));
// {
//   apples: 2,
//   oranges: 3,
//   pears: 3,
// }


//Third task

const findExcess= (arr)=>{
    const checkArr = [];
    let countOdd = 0;
    let countEven = 0;
    let extraNumber;
    arr.forEach(function(item, i){
      
// Check even or odd
        checkArr[i] = item%2
// Count even and odd in array
        if ( checkArr[i] ===0 ){
            countEven++;
        } else countOdd++
// Search extraNumber
        if (countEven<countOdd){
            for (let i in arr){
               if ((arr[i])%2 === 0){
                extraNumber = arr[i]
               }
            }
        } else {for (let i in arr){
            if ((arr[i])%2 !== 0){
             extraNumber = arr[i]
            }
         }}
    }
    )  
    return extraNumber
}



console.log(findExcess([0, 1, 2])); // -> 1
console.log(findExcess([1, 2, 3])); // -> 2
console.log(findExcess([2, 6, 8, 10, 3])); // -> 3
console.log(findExcess([0, 0, 3, 0, 0])); // -> 3
console.log(findExcess([1, 1, 0, 1, 1])); // -> 0


undefind + 1