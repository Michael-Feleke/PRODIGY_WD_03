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

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startAIGame() {
  isAI = true;
  modeSelection.style.display = "none";
  gameContainer.style.display = "block";
  backBtn.style.display = "block";
  resetGame();
}

function startTwoPlayerGame() {
  isAI = false;
  modeSelection.style.display = "none";
  gameContainer.style.display = "block";
  backBtn.style.display = "block";
  resetGame();
}

function goBackToModeSelection() {
  modeSelection.style.display = "block";
  gameContainer.style.display = "none";
  backBtn.style.display = "none";
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);

function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;
  if (board[cellIndex] === "" && gameActive) {
    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkGameStatus();
    togglePlayer();
    if (isAI && gameActive && currentPlayer === "O") {
      setTimeout(makeAIMove, 500);
    }
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkGameStatus() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      highlightWinningCells(a, b, c);
      status.textContent = `${currentPlayer} wins!`;
      return;
    }
  }
  if (!board.includes("")) {
    gameActive = false;
    status.textContent = "It's a draw!";
  }
}

function highlightWinningCells(a, b, c) {
  cells[a].classList.add("win");
  cells[b].classList.add("win");
  cells[c].classList.add("win");
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  status.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
}

function makeAIMove() {
  const emptyCells = board.reduce((acc, val, index) => {
    if (val === "") acc.push(index);
    return acc;
  }, []);

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const cellIndex = emptyCells[randomIndex];
  board[cellIndex] = currentPlayer;
  cells[cellIndex].textContent = currentPlayer;
  checkGameStatus();
  togglePlayer();
}
