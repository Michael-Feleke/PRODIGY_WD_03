const modeSelection = document.getElementById("modeSelection");
const aiModeBtn = document.getElementById("aiModeBtn");
const twoPlayerModeBtn = document.getElementById("twoPlayerModeBtn");
const gameContainer = document.getElementById("gameContainer");
const backBtn = document.getElementById("backBtn");

aiModeBtn.addEventListener("click", startAIGame);
twoPlayerModeBtn.addEventListener("click", startTwoPlayerGame);
backBtn.addEventListener("click", goBackToModeSelection);
