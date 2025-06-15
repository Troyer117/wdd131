import { character } from './character.js';

const nameEl = document.getElementById("name");
const classEl = document.getElementById("class");
const levelEl = document.getElementById("level");
const healthEl = document.getElementById("health");
const logEl = document.getElementById("log");

function updateDisplay() {
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
}

function logMessage(message) {
  logEl.textContent = message;
  // Attach it globally so character can call it
  window.logMessage = logMessage;
}

document.getElementById("attacked").addEventListener("click", () => {
  character.attacked();
  updateDisplay();
});

document.getElementById("levelup").addEventListener("click", () => {
  character.levelUp();
  updateDisplay();
});

logMessage(""); // Prepare function before first call
updateDisplay();