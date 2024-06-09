setInterval(()=>{
    let date  = new Date();
    let hrs = date.getHours() * 30;
    let mins = date.getMinutes() * 6;
    let secs = date.getSeconds() * 6;
    let sec = document.querySelectorAll(".clock1-body .sec");
    let min = document.querySelectorAll(".clock1-body .min");
    let hr = document.querySelectorAll(".clock1-body .hr");
    for(let i=0; i<sec.length; i++) {
        sec[i].style.transform = `rotateZ(${secs}deg)`;
        min[i].style.transform = `rotateZ(${mins}deg)`;
        hr[i].style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
    }
});

setInterval(()=>{
    let date  = new Date();
    let time = document.querySelectorAll(".clock2-body .time");
    let display = document.querySelectorAll(".clock2-body .display");
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds < 10){
    seconds = "0" + seconds;
    }
    if(minutes < 10){
    minutes = "0" + minutes;
    }
    if(hours < 10){
    hours = "0" + hours;
    }
    for(let i=0; i<time.length; i++) {
        time[i].textContent = hours + ":" + minutes + ":" + seconds + " ";
        time[i].style["font-size"] = display[i].clientWidth/6 + "px";
    }
});

