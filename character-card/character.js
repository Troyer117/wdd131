export const character = {
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