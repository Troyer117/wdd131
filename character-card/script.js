const character = {
  name: "Snortleblat",
  class: "Swamp Beat Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/img/snortleblat.png',
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
      logMessage("Snortleblat was attacked!");
    } else {
      alert('Character Died');
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    logMessage("Snortleblat leveled up!");
  }
};

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
}

document.getElementById("attacked").addEventListener("click", () => {
  character.attacked();
  updateDisplay();
});

document.getElementById("levelup").addEventListener("click", () => {
  character.levelUp();
  updateDisplay();
});

updateDisplay();
