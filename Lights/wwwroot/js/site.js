﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//CONTROLPANEL HIDE/SHOW FUNCTION

function hideShowMenu(targetId) {
    var menu = document.getElementById(targetId);
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// THE LIGHT START/STOP FUNCTION
function addBlinks(classToTarget, buttonID) {
    var targetClass = document.getElementsByClassName(classToTarget);
    var button = document.getElementById(buttonID);

    if (button.innerHTML != "STOP") {
        button.innerHTML = "STOP";
        for (var i = 0; i < targetClass.length; i++) {
            targetClass[i].id += "animated";

        }
    } else {
        button.innerHTML = "START";
        for (var i = 0; i < targetClass.length; i++) {
            targetClass[i].id = "";
        }
    }

}

// LIGHTS SIZE FUNCTION

function changeSize(sizeValue, targetClass) {
    var bulbsToChange = document.getElementsByClassName(targetClass);
    for (var i = 0; i < bulbsToChange.length; i++) {
        bulbsToChange[i].style.height = sizeValue + "px";
        bulbsToChange[i].style.width = sizeValue + "px";

    }
}

// LIGHTS COLOR FUNCTION


function changeColor(colorValue, targetClass) {
    var bulbToChange = document.getElementsByClassName(targetClass);

    for (var i = 0; i < bulbToChange.length; i++) {
        bulbToChange[i].style.backgroundColor = colorValue;
    }

}


//EVENTLISTENERS

document.getElementById("button").addEventListener("click", function () { addBlinks("light-bulb", "button") });
document.getElementById("control-panel-show").addEventListener("click", function () { hideShowMenu("control-panel") });


