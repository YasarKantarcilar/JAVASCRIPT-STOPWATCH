/* TIME TEXT VARIABLES */

const milisecond = document.getElementById("milisecond");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

/* BUTTON VARIABLES */

const startButton = document.getElementById("button-start");
const stopButton = document.getElementById("button-stop");
const resetButton = document.getElementById("button-reset");

/* TIME VARIABLES */

let ms = 0;
let s = 0;
let m = 0;
let h = 0;

/* INTERVAL FUNCTION */

function setMyInterval() {
    if(ms < 100){
        ms++
        milisecond.innerHTML = `${ms} ms`;
    }
    else if(ms > 99){
        ms = 0;
        s++
        second.innerHTML = `${s} seconds`;
    }
    if(s > 58){
        s = 0;
        m++
        minute.innerHTML = `${m} minutes`;
    }
    if(m > 58){
        m = 0;
        h++
        minute.innerHTML = `${h} hours`
    }
    
}

let myInterval;

startButton.addEventListener("click", function(){ /* START BUTTON */
    clearInterval(myInterval)
    myInterval = setInterval(setMyInterval, 10); /* INTERVAL SET TO 10MS */
});

stopButton.addEventListener("click", function(){ /* STOP BUTTON */
    clearInterval(myInterval)
})

resetButton.addEventListener("click", function(){ /* RESET BUTTON (SETS VARIABLES TO DEFAULT) */
    ms = `${ms - ms}`;
    s = `${s - s}`;
    m = `${m - m}`;
    h = `${h - h}`;
    milisecond.innerHTML = "WAITING FOR START";
    second.innerHTML = "";
    minute.innerHTML = "";
    hour.innerHTML = "";
})
