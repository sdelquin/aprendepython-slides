const timer = document.querySelector("#timer");

let remaining = 5 * 60;
let interval = null;

function updateTimer() {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  timer.textContent =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;

  if (remaining === 0) {
    clearInterval(interval);
    interval = null;
    return;
  }

  remaining--;
}

updateTimer();
interval = setInterval(updateTimer, 1000);
