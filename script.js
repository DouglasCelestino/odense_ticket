document.addEventListener("DOMContentLoaded", () => {
  // === CONFIGURAÇÕES DO TICKET ===
  const totalTicketMinutes = 75; // duração total do ticket = 1h15
  const elapsedMinutes = 23; // tempo que já passou

  // Converte para segundos
  const totalTicketSeconds = totalTicketMinutes * 60;
  const passedSeconds = elapsedMinutes * 60;

  // Tempo restante no contador
  let totalSeconds = totalTicketSeconds - passedSeconds;

  // Referências no DOM
  const timerEl = document.getElementById("timer");
  const fromEl = document.getElementById("from");
  const untilEl = document.getElementById("until");

  // === CALCULA HORÁRIOS ===
  const now = new Date();
  const startTime = new Date(now.getTime() - passedSeconds * 1000); // começou há 23 minutos
  const endTime = new Date(startTime.getTime() + totalTicketSeconds * 1000); // dura 1h15 desde o início

  // === EXIBE HORÁRIOS NO TICKET ===
  fromEl.textContent = startTime.toLocaleString();
  untilEl.textContent = endTime.toLocaleString();

  // === FUNÇÃO PARA FORMATAR O TEMPO RESTANTE ===
  function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return `${h > 0 ? h + "h : " : ""}${m}min`;
  }

  // === ATUALIZA O CONTADOR ===
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

  // === INICIA ===
  updateTimer();
  const interval = setInterval(updateTimer, 1000);
});
