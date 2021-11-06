'use strict';
const countDown = (date, componentId) => {
    const timeToDate = date.getTime();
    const idInterval = setInterval(() => {
        const now = new Date().getTime();
        const delta = timeToDate - now;
        const days = Math.floor(delta / (1000 * 60 * 60 * 24));
        const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((delta % (1000 * 60)) / 1000);
        document.getElementById(componentId).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (delta < 0) {
            clearInterval(idInterval)
            document.getElementById(componentId).innerHTML = "Count Down Finished";
        }
    }, 1000);
}
const date = new Date("Jan 1, 2022 00:00:00");
countDown(date, "countDown");
countDown(date, "countDown2");