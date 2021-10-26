const basic = ["rock", "paper", "scissors"];
const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

class Game {
  constructor() {
    this.choices = basic;
  }
  
  getValue(choice) {
    return this.choices[choice];
  }
  
  get choiceCount() {
    return this.choices.length;
  }
}

export default Game;
