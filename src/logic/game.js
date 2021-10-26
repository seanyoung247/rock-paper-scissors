const basic = ["rock", "paper", "scissors"];
const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

class Game {
  constructor() {
    this.choices = basic;
  }
  /**
   * Returns the string value of a given numeric choice
   */
  getValue(choice) {
    return this.choices[choice];
  }
  /**
   * Returns the total number of available choices
   */
  get choiceCount() {
    return this.choices.length;
  }
  /**
   * Returns a random value within the range of available choices
   */
  randomChoice() {
    return Math.floor(Math.random() * this.choices.length);
  }
}

export default Game;
