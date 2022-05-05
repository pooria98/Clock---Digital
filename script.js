const hourSpan = document.querySelector('.hours');
const minuteSpan = document.querySelector('.minutes');
const secondSpan = document.querySelector('.seconds');
const time = document.querySelector('.time');

const d = new Date();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
if (hours > 12) {
    hours = hours - 12;
    time.innerText = "PM";
} else {
    time.innerText = "AM";
}
hourSpan.innerText = String(hours).padStart(2, '0');
minuteSpan.innerText = String(minutes).padStart(2, '0');
secondSpan.innerText = String(seconds).padStart(2, '0');

setInterval(function () {
    const d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if (hours > 12) {
        hours = hours - 12;
        time.innerText = "PM";
    } else {
        time.innerText = "AM";
    }
    hourSpan.innerText = String(hours).padStart(2, '0');
    minuteSpan.innerText = String(minutes).padStart(2, '0');
    secondSpan.innerText = String(seconds).padStart(2, '0');
}, 500);