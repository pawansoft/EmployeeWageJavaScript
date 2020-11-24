const present = 1;
const halfDay = 2;
const absent = 3;

function checkAttendance(){
    const attendance = Math.floor((Math.random() * 3) +1)
    switch(attendance){
        case present:
            return 'FullDay';
        case halfDay:
            return 'HalfDay';
        case absent:
            return 'Absent'
    }
}

function calculateDailyWage(){
    const WAGE_PER_HOUR = 20;
    const HOUR_IN_DAY = 8;
    const HALF_DAY = 4;

    const attend = checkAttendance();

    if(attend == 'FullDay'){
        return HOUR_IN_DAY * WAGE_PER_HOUR;
    }
    else if(attend == 'HalfDay'){
        return HALF_DAY * WAGE_PER_HOUR;
    }
    else if(attend == 'Absent'){
        return 0;
    }
}

const attend = calculateDailyWage();
console.log(attend);