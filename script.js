window.onload = function(){
    setInterval(fSec,100);

    let d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    seconds = d.getSeconds();
    sec_deg = seconds*6;  // 1 second = 6 Deg

    minutes = d.getMinutes();
    min_deg = minutes*6;  // 1 minute = 6 Deg

    hours = d.getHours();
    hour_deg = hours*30 + minutes*0.5;  // 1 hour = 30 Deg, total 12 hours in 360 degs

    document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec_deg+'deg)';
    document.querySelector('.minutes-arrow').style.transform = 'rotate('+min_deg+'deg)';
    document.querySelector('.hours-arrow').style.transform = 'rotate('+hour_deg+'deg)';


    function fSec(){
        // Get Seconds from Data Object 
        d = new Date();
        seconds = d.getSeconds();
        sec_deg = seconds*6;  // 1 second = 6 Deg

        minutes = d.getMinutes();
        min_deg = minutes*6;  // 1 minute = 6 Deg

        hours = d.getHours();
        hour_deg = hours*30 + minutes*0.5;  // 1 hour = 30 Deg, total 12 hours in 360 degs

        document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec_deg+'deg)';
        document.querySelector('.minutes-arrow').style.transform = 'rotate('+min_deg+'deg)';
        document.querySelector('.hours-arrow').style.transform = 'rotate('+hour_deg+'deg)';
    }
}