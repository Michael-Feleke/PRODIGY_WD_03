const modeSelection = document.getElementById("modeSelection");
const aiModeBtn = document.getElementById("aiModeBtn");
const twoPlayerModeBtn = document.getElementById("twoPlayerModeBtn");
const gameContainer = document.getElementById("gameContainer");
const backBtn = document.getElementById("backBtn");

aiModeBtn.addEventListener("click", startAIGame);
twoPlayerModeBtn.addEventListener("click", startTwoPlayerGame);
backBtn.addEventListener("click", goBackToModeSelection);

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let isAI = false;

const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
