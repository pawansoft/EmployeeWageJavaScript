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

const attend = checkAttendance();
console.log(attend);