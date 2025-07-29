// Start music on first click
const music = document.getElementById("bg-music");
window.addEventListener("click", () => {
  if (music.paused) {
    music.muted = false;
    music.play();
  }
}, { once: true });

// Reveal birthday message on button click
const revealBtn = document.getElementById("reveal-btn");
const message = document.getElementById("message");

revealBtn.addEventListener("click", () => {
  message.style.display = "block";
  revealBtn.style.display = "none";
});
