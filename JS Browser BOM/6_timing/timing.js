document.getElementById("startBtn").onclick = function() {
    startCountdown(10);
};

function startCountdown(seconds) {
    const timerElement = document.getElementById("timer");
    let remainingTime = seconds;

    const countdownInterval = setInterval(() => {
        timerElement.textContent = remainingTime;
        if (remainingTime === 0) {
            clearInterval(countdownInterval);
            flashTimer(timerElement, 5);
        } else {
            remainingTime--;
        }
    }, 1000);
}

function flashTimer(element, flashes) {
    let flashCount = 0;

    const flashInterval = setInterval(() => {
        element.classList.toggle("flash");
        flashCount++;

        if (flashCount === flashes * 2) {
            clearInterval(flashInterval);
            element.classList.remove("flash");
        }
    }, 500);
}
