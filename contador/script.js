const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const anoNovo = "1 jan 2023"

function countdown() {
    const newYearDate = new Date(anoNovo);

    const actualDate = new Date();

    const base = Math.floor((newYearDate-actualDate)/1000);

    const day = Math.floor(base/3600/24);
    const hours = Math.floor(base/60)%60;
    const minutes = Math.floor(base/3600)%24;
    const seconds = Math.floor(base%60);

    daysEl.innerHTML = day;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

countdown();
setInterval(countdown,1000);