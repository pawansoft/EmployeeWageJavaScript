function calculateDailyWage(){
    const WAGE_PER_HOUR = 20;
    const HOUR_IN_DAY = 8;
    const HALF_DAY = 4;
    var totalWorkingDay = 0;
    var totalWage = 0;
    var totalWorkingHour = 0;
    while(totalWorkingDay < 20 && totalWorkingHour < 100){

        const attendance = Math.floor((Math.random() * 3) +1);

        if(attendance == 1){
            totalWage = (HOUR_IN_DAY * WAGE_PER_HOUR) + totalWage;
            totalWorkingDay = totalWorkingDay + 1;
        }
        else if(attendance == 2){
            totalWage = (HALF_DAY * WAGE_PER_HOUR) + totalWage ;
            totalWorkingHour = totalWorkingHour + 4;
        }
        else if(attendance == 3){
        }
    }
    return totalWage;
}

const attend = calculateDailyWage();
console.log(attend);