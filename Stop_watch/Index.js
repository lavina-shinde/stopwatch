// let time = document.getElementById("timer");
// let hour=0;
// let minute=0;
// let second =0;
// let stopTime=true;

// //start timer 
// function startTimer() {
//     if(stopTime == true){
//         stopTime = false;
//         timeCycle();
//     }
// }
// //stop timer
// function stopTimer() {
//     if(stopTime == false){
//         stopTime = true;
//     }
// }
// //time cycle
// function timeCycle() {
//  if(stopTime == false){
//  second = parseInt(second);
//  minute = parseInt(minute);
//  hour = parseInt(hour);

//  second = second+1;//counting second timeinterval

//  //limiting to 60 seconds
// if(second == 60){
// minute=minute+1;
// second=0;
//  }
//  if(minute==60){
//     hour = hour+1;
//     minute=0;
//     second=0;
//  }

// if(second<10){
//     second = "0"+second;
// }

// if(minute<10){
//     minute = "0"+minute;
// }

// if(hour<10){
//     hour = "0"+hour;
// }

// time.innerHTML = hour + ":" + minute + ":" + second;
// setTimeout("timeCycle()",1000);

//  }
// }

// //reset timer 
// function resetTimer() {
//     time.innerHTML = "00:00:00";
//     stopTime = true;
//     hour=0;
//     minute=0;
//     second=0;
// }
 
let timerDisplay = document.querySelector(".timer");
let startbutton = document.getElementById("startbutton");
let stopbutton  = document.getElementById("stopbutton");
let resetbutton  = document.getElementById("resetbutton");

let hour = 0;
let minute =0;
let second =0;

let timerId =null;

startbutton.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);
});

stopbutton.addEventListener('click',function(){
    clearInterval(timerId)
});

resetbutton.addEventListener('click',function(){
    clearInterval(timerId)
    timerDisplay.innerHTML=`00 : 00 : 00`;
    hour = minute = second = 0;
});

function startTimer() {
    second++;
    if(second==60){
     second=0;
     minute++;
     if(minute==60){
        minute=0;
        hour=hour+1;
     }
    }

    let secondString = second < 10 ? `0${second}` : second;
    let minuteString = minute < 10 ? `0${minute}` : minute;
    let hourString = hour < 10 ? `0${hour}` : hour;

    timerDisplay.innerHTML = `${hourString} : ${minuteString} : ${secondString}`;
}