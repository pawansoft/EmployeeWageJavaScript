const present = 1;
const absent = 2;

function checkAttendance(){
    const attendance = Math.floor((Math.random() * 2) +1)
    if(attendance == present){
        return 'FullDay'
    }
    else if(attendance ==  absent ){
        return 'Absent';
    }
}


function calculateDailyWage(){
    const WAGE_PER_HOUR = 20;
    const HOUR_IN_DAY = 8;

    const attend = checkAttendance();

    if(attend == 'FullDay'){
        return HOUR_IN_DAY * WAGE_PER_HOUR;
    }
    else if(attend == 'Absent'){
        return 0;
    }
}

const attend = calculateDailyWage();
console.log(attend);