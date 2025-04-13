function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2025-05-01T00:00:00");
    const now = new Date();
    const diff = targetDate - now;
  
    if (diff <= 0) {
      countdownElement.textContent = "C'est aujourd'hui ! 🎉";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    countdownElement.textContent = `Dans ${days} jours, ${hours}h ${minutes}m ${seconds}s`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  