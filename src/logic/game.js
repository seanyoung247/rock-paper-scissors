const basic = ["rock", "paper", "scissors"];
const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

class Game {
  constructor() {
    this._choices = basic;
  }

  /**
   * Returns the string value of a given numeric choice
   */
  getValue(choice) {
    return this._choices[choice];
  }

  /**
   * Returns the total number of available choices
   */
  get choiceCount() {
    return this._choices.length;
  }

  /**
   * Returns the available choices
   */
  get choices() {
    return this._choices;
  }

  /**
   * Returns a random value within the range of available choices
   */
  randomChoice() {
    return Math.floor(Math.random() * this._choices.length);
  }

  /**
   * Returns true if the given choice is valid
   */
  isValidChoice(choice) {
    return (choice > 0 && choice < this._choices.length);
  }

  /**
   * Returns which player is the winner
   *  @returns: 0 if tie, 1 if player 1, 2 if player 2
   */
  checkWinner(p1, p2) {
    const mod = (a, b, c = a % b) => (c < 0) ? c + b : c;
    const count = this._choices.length;

    if (p1 === p2) return 0;
    if (mod(p1 - p2, count) < count / 2) return 1;
    else return 2;
  }
}

export default Game;
