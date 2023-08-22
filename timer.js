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
};

function calculateCountdown1() {
  const now = new Date();
  const targetDate = new Date(now);

  // Definir o dia da semana para sexta-feira (5)
  targetDate.setHours(18, 0, 0, 0);

  while (targetDate.getDay() !== 5) {
    targetDate.setDate(targetDate.getDate() + 1);
  };

  const currentHour = now.getHours();
  const currentDay = now.getDay();

  // Verifica se está fora do horário de trabalho ou não é sexta-feira
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 18) {
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      targetDate.setDate(targetDate.getDate() + 7);
    };

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown1_faltam").textContent = "Faltam";
    document.getElementById("countdown1").textContent = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    document.getElementById("countdown1_expediente").textContent = "até o fim do expediente.";
  } else {
    document.getElementById("countdown1_faltam").textContent = "";
    document.getElementById("countdown1").textContent = "";
    document.getElementById("countdown1_expediente").textContent = "Bom descanço!😉";
  }
}

// Formata as horas para HH:MM:SS
function formatNumber(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function calculateCountdown2() {
  const now = new Date();
  const targetDate = new Date(now);

  // Definir o dia da semana para sexta-feira (5)
  targetDate.setHours(18, 0, 0, 0);

  while (targetDate.getDay() !== 5) {
    targetDate.setDate(targetDate.getDate() + 1);
  };

  const currentHour = now.getHours();
  const currentDay = now.getDay();

  // Verifica se está fora do horário de trabalho ou não é sexta-feira
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 18) {
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      targetDate.setDate(targetDate.getDate() + 7);
    };

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown2").textContent = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos até o fim do expediente na sexta-feira.`;
  } else {
    document.getElementById("countdown2").textContent = "Descançar, porque depois tem mais. 😔✊";
  }
}

calculateCountdown1(); // Chama a função para a primeira contagem regressiva
setInterval(calculateCountdown1, 1000); // Atualiza a cada segundo

calculateCountdown2(); // Chama a função para a segunda contagem regressiva
setInterval(calculateCountdown2, 1000); // Atualiza a cada segundo

// Define o dia da semana
const dateOption = { weekday: 'long' };
let today = new Date().toLocaleDateString('pt-br', dateOption);
console.log(today);

function hoje() {
  const dateOption = { weekday: 'long' };
  let today = new Date().toLocaleDateString('pt-br', dateOption);
  let todayUppercase = today.charAt(0).toUpperCase() + today.slice(1);

  if (today === 'sexta-feira') {
    document.getElementById("hoje").textContent = "🍻 Sextou! 🍻";
  }
  else {
    document.getElementById("hoje").textContent = `📆 ${todayUppercase} 📆`;
  }
}

hoje()

// Troca os GIFs por dia da semana
const wallpaperElement = document.getElementById("background-gif");

function setWallpaper(dayOfWeek) {
  const gifs = {
    'segunda-feira': 'image/icegif-2.gif',
    'terça-feira': 'image/YQgT.gif',
    'quarta-feira': 'image/icegif-2.gif',
    'quinta-feira': 'image/icegif-2.gif',
    'sexta-feira': 'image/icegif-2.gif',
    'sábado': 'image/sleeping.gif',
    'domingo': 'image/sleeping.gif'
  };

  wallpaperElement.style.backgroundImage = `url(${gifs[dayOfWeek]})`;
}

setWallpaper(today)