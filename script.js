window.onload = function(){
    setInterval(fSec,100);

    let d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    function fSec(){
        // Get Seconds from Data Object 
        d = new Date();
        seconds = d.getSeconds();
        sec_deg = seconds*6;  // 1 second = 6 Deg
         if(sec_deg == 360)
         {
             sec_deg = 0;
         }

        minutes = d.getMinutes();
        min_deg = minutes*6;  // 1 minute = 6 Deg
        if(min_deg == 360)
        {
            min_deg = 0;
        }

        hours = d.getHours();
        hour_deg = hours*30 + minutes*0.5;  // 1 hour = 30 Deg, total 12 hours in 360 degs

        document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec_deg+'deg)';
        document.querySelector('.minutes-arrow').style.transform = 'rotate('+min_deg+'deg)';
        document.querySelector('.hours-arrow').style.transform = 'rotate('+hour_deg+'deg)';

        // Print Date and Time
        printDateTime(d);
    }
}

function printDateTime(date) {
    let divElement = document.getElementById("date-time");
    let hElement = document.getElementById("last-date-time");

    hElement.remove();
    divElement.innerHTML += `<h1 id="last-date-time">${date}</h1>`;
}