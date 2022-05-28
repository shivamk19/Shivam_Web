const daysc = document.getElementById("days");
const hoursc = document.getElementById("hours");
const minutesc = document.getElementById("minutes");
const secondsc = document.getElementById("seconds");

const newYears = window.prompt("Enter the date(DD Month YYYY): ");
alert("Love You");

function countdown() {
    const finaldate = new Date(newYears);
    const currdate = new Date();

    const totalseconds = Math.floor((finaldate - currdate) / 1000);

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    
    daysc.innerHTML = days;
    hoursc.innerHTML = format(hours);
    minutesc.innerHTML = format(minutes);
    secondsc.innerHTML = format(seconds);
}
function format(time) {
    return time < 10 ? time : time;
}
countdown();
setInterval(countdown, 1000);