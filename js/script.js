





setInterval(function(){

const daysCell = document.getElementsByClassName('days');
const hoursCell = document.getElementsByClassName('hours');
const minutesCell = document.getElementsByClassName('minutes');
const secondsCell = document.getElementsByClassName('seconds');


for(let i= 0 ; i<daysCell.length ; i++){


    let dt = daysCell[i].getAttribute('data-date');
    let inputDate =new Date(dt);
    let currentDate = new Date();
    let diff = inputDate - currentDate
    let seconds = (diff /1000);
    
    let minutes = (seconds /60);
    let hours = (minutes/60);
    let days = (hours / 24);

    let rest_days = days;
    let rest_hours = hours % 24 ;
    let rest_minutes = minutes % 60 ;
    let rest_seconds = seconds % 60 ;

    daysCell[i].innerHTML = `${days<10?'0'+ rest_days.toFixed(0) : rest_days.toFixed(0)}`
    hoursCell[i].innerHTML = `${hours%24<10?'0'+ rest_hours.toFixed(0) : Math.floor(rest_hours)}`
    minutesCell[i].innerHTML = `${ minutes%60<10? '0'+ rest_minutes.toFixed(0) :  rest_minutes.toFixed(0) }`
    secondsCell[i].innerHTML = `${ seconds%60<10? '0'+ rest_seconds.toFixed(0) :  rest_seconds.toFixed(0) }`
}

},1000)

