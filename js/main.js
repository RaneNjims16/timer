//variables
const timer_element = document.querySelector(".clock");

const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

let seconds = 0;
let time_intervall = null;





//fucntion

function timer(){
    seconds++;

    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds - (hrs * 3600))/60);
    let secs  = seconds % 60 ;

    if (hrs < 10) hrs = `0${hrs}`;
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;

    timer_element.innerText = `${hrs}:${mins}:${secs}`;
}

function start(){
    if(time_intervall) {
        return;
    }
    time_intervall = setInterval(timer,1000);
}

function stop(){
    clearInterval(time_intervall);
    time_intervall = null;
}

function reset(){
   stop();
   seconds = 0;
   timer_element.innerText = "00:00:00";
}


start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);
