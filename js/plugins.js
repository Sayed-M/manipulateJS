/*global $, console, alert*/

$(document).ready(function () {
    "use strict";

    var seconds     = 10,

        countDiv    = document.getElementById('countdown'),

        secondPass,

        countdown   = setInterval(function () {
            
            secondPass();

        }, 1000);

    function secondPass() {

        var minutes     = Math.floor(seconds / 60),

            remSeconds  = seconds % 60;

        if (remSeconds < 10) {
            remSeconds = '0' + remSeconds;
        }

        countDiv.innerHTML = minutes + ':' + remSeconds;

        if (seconds > 0) {
            seconds -= 1;
        } else {
            clearInterval(countdown);
            countDiv.innerHTML = 'Done';
        }
    }
    
});