// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function addBlinks(classToTarget, buttonID) {
    var elementsWithClass = document.getElementsByClassName(classToTarget);
    var button = document.getElementById(buttonID);

    if (button.innerHTML != "STOP") {
        button.innerHTML = "STOP";
        for (var i = 0; i < elementsWithClass.length; i++) {
            elementsWithClass[i].classList += " animated";
            
        }
    } else {
        button.innerHTML = "START";
        for (var i = 0; i < elementsWithClass.length; i++) {
            elementsWithClass[i].classList = "light-bulb";
        }
    }

}