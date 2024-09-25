// Declaring variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Creating gunction dynamically changing color of body
// Adding current gradient color as Text
function setGradient() {
    var gradient = body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = gradient + ";";
}

// Adding Event Listener for inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);




