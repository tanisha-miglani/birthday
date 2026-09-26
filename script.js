/* =====================================
BIRTHDAY WEBSITE JAVASCRIPT
===================================== */

/* OPEN GIFT */

function openGift() {
  const surprise = document.getElementById("surprise");

  surprise.style.display = "block";

  document.querySelector(".gift").innerHTML = "🎉";

  document.querySelector(".gift-text").innerHTML = "Surprise! 💖";

  createConfetti(120);

  document.getElementById("wishResult").innerHTML =
    "🎊 The Celebration Has Started! 🎊";
}

/* MAKE A WISH */

function makeWish() {
  document.getElementById("wishResult").innerHTML =
    "✨ Your wish has been sent to the stars! 🌟<br>💖 May it come true! 💖";

  createConfetti(180);
}

/* MUSIC */

function toggleMusic() {
  const music = document.getElementById("birthdayMusic");

  const button = document.querySelector(".music-btn");

  if (music.paused) {
    music.play();

    button.innerHTML = "⏸️ Pause Music";
  } else {
    music.pause();

    button.innerHTML = "🎵 Play Music";
  }
}

/* CONFETTI */

function createConfetti(amount) {
  const container = document.getElementById("confetti");

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 8 + 5;

    piece.style.width = size + "px";

    piece.style.height = size * 1.5 + "px";

    piece.style.background = `hsl(${Math.random() * 360},100%,65%)`;

    piece.style.animationDuration = Math.random() * 2 + 2 + "s";

    piece.style.animationDelay = Math.random() + "s";

    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}

/* REPLAY */

function replay() {
  location.reload();
}

/* INITIAL CELEBRATION */

window.addEventListener("load", function () {
  setTimeout(function () {
    createConfetti(40);
  }, 1000);
});
