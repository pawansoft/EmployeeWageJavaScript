class EmployeeWage{

    constructor(WAGE_PER_HOUR, HOUR_IN_DAY, HALF_DAY){
        this.WAGE_PER_HOUR = WAGE_PER_HOUR;
        this.HOUR_IN_DAY = HOUR_IN_DAY;
        this.HALF_DAY = HALF_DAY;
    }
}

function calculateDailyWage(WAGE_PER_HOUR, HOUR_IN_DAY, HALF_DAY){
    var totalWorkingDay = 0;
    var totalWage = 0;
    var totalWorkingHour = 0;
    var arrOfDailyWage = new Array(30);
    var i = 0;
    while(totalWorkingDay < 20 && totalWorkingHour < 100){

        const attendance = Math.floor((Math.random() * 3) +1);

        if(attendance == 1){
            totalWage = (HOUR_IN_DAY * WAGE_PER_HOUR) + totalWage;
            totalWorkingDay = totalWorkingDay + 1;
            arrOfDailyWage[i] = totalWage;
        }
        else if(attendance == 2){
            totalWage = (HALF_DAY * WAGE_PER_HOUR) + totalWage ;
            totalWorkingHour = totalWorkingHour + 4;
            arrOfDailyWage[i] = totalWage;
        }
        else if(attendance == 3){
            arrOfDailyWage[i] = "Absent";
        }
        i++;
    }
    return arrOfDailyWage;
}

const employeeWage = new EmployeeWage(20, 8, 4);
console.log(employeeWage.HALF_DAY);

const attend = calculateDailyWage(employeeWage.WAGE_PER_HOUR, employeeWage.HOUR_IN_DAY, employeeWage.HALF_DAY);
console.log(attend);

console.log('-------------------------------------------------');
console.log("Total Wage For This Month : " + attend[attend.length - 1]);
console.log('-------------------------------------------------');