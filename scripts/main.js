let button = document.querySelector(".overlayHydrogen");
let skip = document.querySelector(".overlay");

button.addEventListener("click", turnOn);
skip.addEventListener("click", turnOff);

function turnOn() {
    document.querySelector(".overlay").style.display = "grid";
}

function turnOff() {
    document.querySelector(".overlay").style.display = "none";
}

