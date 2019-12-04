var body = document.body;
var isBlue = false;

//body.style.background = "red";

function switchColors() {
    if(isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
} 

setInterval(switchColors, 2000);
