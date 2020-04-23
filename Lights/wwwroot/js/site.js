// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


// THE LIGHT START/STOP FUNCTION
function addBlinks(classToTarget, buttonID) {
    var targetClass = document.getElementsByClassName(classToTarget);
    var button = document.getElementById(buttonID);

    if (button.innerHTML != "STOP") {
        button.innerHTML = "STOP";
        for (var i = 0; i < targetClass.length; i++) {
            targetClass[i].classList += " animated";

        }
    } else {
        button.innerHTML = "START";
        for (var i = 0; i < targetClass.length; i++) {
            targetClass[i].classList = "light-bulb";
        }
    }

}

// LIGHTS SIZE FUNCTION

function changeSize(sizeValue, targetId) {
    var bulbToChange = document.getElementById(targetId);
    bulbToChange.style.width = sizeValue + "px";
    bulbToChange.style.height = sizeValue + "px";
}

// LIGHTS COLOR FUNCTION

function changeColor(colorValue, targetId) {
    var bulbToChange = document.getElementById(targetId);
    bulbToChange.style.backgroundColor = colorValue;
}


//EVENTLISTENERS

document.getElementById("button").addEventListener("click", function () { addBlinks("light-bulb", "button") });

