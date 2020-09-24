let button = document.querySelector(".overlayHydrogen");
let skip = document.querySelector(".closebtn");

button.addEventListener("click", turnOn);
skip.addEventListener("click", turnOff);

function turnOn() {
    document.querySelector(".overlay").style.bottom = "0";
    document.querySelector(".overlay").style.height = "100%";
}

function turnOff() {
    document.querySelector(".overlay").style.bottom = "100%";
    document.querySelector(".overlay").style.height = "0";
}

