(function () {
  var start = new Date;
  start.setHours(18, 0, 0); // 6pm

  function pad(num) {
    return ("0" + parseInt(num)).slice(-2);
  }

  function timer() {
    var now = new Date;
    if (now > start) { // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    document.getElementById('time').innerHTML =
      hh + ":" + mm + ":" + ss;
    setTimeout(timer, 1000);
  }

  document.addEventListener('DOMContentLoaded', timer);
})();

function toggleTheme() {
  var element = document.body;
  var themeIcon = document.getElementById("themeIcon");
  var themeText = document.getElementById("themeText");

  if (element.classList.contains("lightmode")) {
    element.classList.remove("lightmode");
    element.classList.add("darkmode");
    themeIcon.textContent = "🌙";
    themeText.textContent = "Daylight Mode";
  } else {
    element.classList.remove("darkmode");
    element.classList.add("lightmode");
    themeIcon.textContent = "🌞";
    themeText.textContent = "Midnight Mode";
  }
}

function calculateCountdown() {
  const now = new Date();
  const targetDate = new Date(now);

  targetDate.setHours(8, 0, 0, 0);

  // Define o dia da semana para sexta-feira (5)
  const friday = 5;

  while (targetDate.getDay() !== friday) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  targetDate.setHours(18, 0, 0, 0);

  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    targetDate.setDate(targetDate.getDate() + 7);
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos até o fim do expediente na sexta-feira.`;
}

calculateCountdown(); // Chama a função ao carregar a página
setInterval(calculateCountdown, 1000); // Atualiza a cada segundo