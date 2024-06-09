window.onscroll = function scrollbar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}
setInterval(()=>{
    
/*
    document.querySelector(".time-left").style.width = left + "%";
    if(left >90 && left <=100) {document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-info";}
    if(left >50 && left <=90) {document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-success";}
    if(left >30 && left <=50) {document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-warning";}
    if(left >=0 && left <=30) {document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-warning";}
*/
});
