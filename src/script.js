document.addEventListener("DOMContentLoaded", () => {
  // === Ticket UI configuration (visual simulation only) ===
  const totalTicketMinutes = 75;
  // Simulated elapsed time to demonstrate time-based rendering
  const elapsedMinutes = 23;
  const totalTicketSeconds = totalTicketMinutes * 60;
  const passedSeconds = elapsedMinutes * 60;

  let totalSeconds = totalTicketSeconds - passedSeconds;

  const timerEl = document.getElementById("timer");
  const fromEl = document.getElementById("from");
  const untilEl = document.getElementById("until");

  const now = new Date();
  const startTime = new Date(now.getTime() - passedSeconds * 1000); // começou há 23 minutos
  const endTime = new Date(startTime.getTime() + totalTicketSeconds * 1000); // dura 1h15 desde o início

  fromEl.textContent = startTime.toLocaleString();
  untilEl.textContent = endTime.toLocaleString();

  function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return `${h > 0 ? h + "h : " : ""}${m}min`;
  }

  function updateTimer() {
    if (totalSeconds <= 0) {
      timerEl.textContent = "EXPIRED";
      timerEl.style.color = "#c72626";
      clearInterval(interval);
    } else {
      timerEl.textContent = formatTime(totalSeconds);
      totalSeconds--;
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
});
