const basic = ["rock", "paper", "scissors"];
const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

/**
 * Game class performs logic functions for the rock paper scissors game
 */
class Game {
  constructor() {
    this._choices = basic;
  }

  /**
   * Returns the string value of a given numeric choice
   *  @returns {string} value of choice index
   */
  getValue(choice) {
    return this._choices[choice];
  }

  /**
   * Returns the total number of available choices
   *  @returns {number} number of available choices
   */
  get choiceCount() {
    return this._choices.length;
  }

  /**
   * Returns the available choices
   *  @returns {string[]} array of available choices
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
   *  @param {number} choice numeric index of choice
   */
  isValidChoice(choice) {
    return (choice > 0 && choice < this._choices.length);
  }

  /**
   * Returns which player is the winner
   *  @param {number} p1 numeric index of player one choice (0..n-1)
   *  @param {number} p2 numeric index of player two choice (0..n-1)
   *  @returns 0 if tie, 1 if player 1, 2 if player 2
   */
  checkWinner(p1, p2) {
    // Works by splitting the list of options in half using choice one as the
    // pivot and wrapping at the ends. If choice two is in the "high" half it
    // wins, if it is in the low half it loses. Correct choice array order is
    // required for correct response.
    const mod = (a, b, c = a % b) => (c < 0) ? c + b : c;
    const count = this._choices.length;

    if (p1 === p2) return 0;
    if (mod(p1 - p2, count) < count / 2) return 1;
    else return 2;
  }
}

export default Game;
