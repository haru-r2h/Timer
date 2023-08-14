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
  
  // Verifica se o dia atual é uma segunda-feira (0 = domingo, 1 = segunda-feira, ...)
  if (now.getDay() === 1) {
    const targetDate = new Date(now);

    // Define o horário de início (8:00)
    targetDate.setHours(8, 0, 0, 0);

    const hoursPerDay = 10; // horas por dia de trabalho
    const totalHours = 50;  // total de horas

    let remainingTime = totalHours * 60 * 60 * 1000; // tempo total em milissegundos
    let daysCount = 0;

    while (remainingTime > 0) {
      // Verifica se está dentro do horário de trabalho e não é fim de semana
      if (targetDate.getHours() >= 8 && targetDate.getHours() < 18 &&
          targetDate.getDay() >= 1 && targetDate.getDay() <= 5) {
        remainingTime -= hoursPerDay * 60 * 60 * 1000; // desconta o tempo de trabalho diário em milissegundos
      } else {
        // Fora do horário de trabalho
        document.getElementById("countdown1").textContent = "Fora do horário de trabalho.";
        return;
      }

      // Avança para o próximo dia
      targetDate.setDate(targetDate.getDate() + 1);
      daysCount++;
    }

    const days = Math.floor(daysCount);
    const hours = Math.floor(remainingTime / (60 * 60 * 1000));
    const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    document.getElementById("countdown1").textContent = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o fim de expediente.`;
  } else {
    // Não é segunda-feira
    document.getElementById("countdown1").textContent = "Esta contagem é válida apenas para as segundas-feiras.";
  }
};

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
};

calculateCountdown1(); // Chama a função para a primeira contagem regressiva
setInterval(calculateCountdown1, 1000); // Atualiza a cada segundo

calculateCountdown2(); // Chama a função para a segunda contagem regressiva
setInterval(calculateCountdown2, 1000); // Atualiza a cada segundo
