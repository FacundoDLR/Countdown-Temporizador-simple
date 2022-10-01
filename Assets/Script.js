const getRamainTime = deadline => {
    let now = new Date();

        remainTime = (new Date(deadline) - now + 1000) / 1000;
        reamainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        reamainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        reamainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
        reamainDays = Math.floor(remainTime / (3600 * 24));

    return{
        remainTime,
        reamainSeconds,
        reamainMinutes,
        reamainHours,
        reamainDays
    }
}

console.log(getRamainTime("Oct 14 2022 12:06:30 GMT-0300"));

const countdown = (deadline, elem, finalMessage) => {
    const element = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
        let time = getRamainTime(deadline);
        element.innerHTML = `Dias: ${reamainDays} Hs: ${reamainHours} Min: ${reamainMinutes} Seg: ${reamainSeconds}`;

        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            element.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown("Oct 01 2022 12:41:00", "clock", "Feliz cumpleaños!!! 🥳🎈🎉🎂");