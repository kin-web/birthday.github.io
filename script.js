function showMessage() {
    const msg = document.getElementById('extraMessage');
    msg.textContent = 'Kamu luar biasa waa! Terus bersinar dan gapai semua impianmu yaa 🥰✨';
    msg.classList.remove('hidden');
  }
  
  // Confetti animation
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(confetti);
  }

  // 🎉 Tambahkan confetti saat tombol diklik
document.getElementById("surpriseBtn").addEventListener("click", function () {
    startConfetti();
    setTimeout(stopConfetti, 5000); // Hentikan setelah 5 detik
  });

  document.getElementById("surpriseBtn").addEventListener("click", function () {
    startConfetti();
    showSurpriseText();
    createBalloons(15);
  });
  
  function showSurpriseText() {
    const text = document.getElementById("surprise-text");
    text.innerText = " Surprise!!! ";
    text.style.display = "block";
    setTimeout(() => {
      text.style.display = "none";
    }, 4000);
  }
  
  function createBalloons(count) {
    const container = document.getElementById("balloon-container");
    for (let i = 0; i < count; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.backgroundColor = getRandomColor();
      balloon.style.animationDuration = 3 + Math.random() * 2 + "s";
      container.appendChild(balloon);
  
      setTimeout(() => {
        balloon.remove();
      }, 5000);
    }
  }
  
  function getRandomColor() {
    const colors = ["#ff4d4d", "#ffcc00", "#33cc33", "#3399ff", "#ff66cc"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  document.getElementById("popSound").play();

  document.getElementById("surpriseBtn").addEventListener("click", function () {
    document.getElementById("popSound").play(); // 🔊 Mainkan suara
    startConfetti();
    showSurpriseText();
    createBalloons(15);
  });
  