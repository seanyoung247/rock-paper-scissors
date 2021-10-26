const basic = ["rock", "paper", "scissors"];
const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

class Game {
  constructor() {
    this.choices = basic;
  }
  
  getChoice(choice) {
    return this.choices[choice];
  }
}

export default Game;
