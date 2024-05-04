window.onload = function() {
    event.preventDefault();
    let ld = document.querySelectorAll(".loader");
    for(let i=0; i<ld.length; i++) {
        if(ld[i].parentElement.clientHeight < ld[i].parentElement.clientWidth) {
            ld[i].style["height"] = ld[i].parentElement.clientHeight + "px";
        }
        else {
            ld[i].style["width"] = ld[i].parentElement.clientWidth + "px";
        }
    }
}