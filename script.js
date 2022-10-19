const htmHours = document.querySelector(".hours")
const htmlMinutes = document.querySelector(".minutes")
const htmlSeconds = document.querySelector(".seconds")

const clock = setInterval(() => {
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    htmHours.textContent = hours + " : ";
    htmlMinutes.textContent = minutes + " : ";
    htmlSeconds.textContent = seconds;
}, 1000)