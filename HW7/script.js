// First task
const schedule = function(){
    let switcher = true
    const scheduleObj = {}
    do{
        let task = prompt('Какую задачу вы планируете выполнить?');
        let date = prompt('Укажите время в формате ХХ:ХХ?');
        if (date == null || task == null){
            switcher =false       
        } else {
            scheduleObj[date] =task
        }
    } while(switcher);
    return scheduleObj
}
const yourSchedule = schedule();
for (let item in yourSchedule ){
    console.log (`${item} : ${yourSchedule[item]} \n`)
  
}

// Second task
const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };

const totalSalary = function(salaries){
    let total = 0;
    for (let employee in salaries){
        total += +salaries[employee]
    }
    return total.toFixed(2)
}

console.log(totalSalary(salaries));