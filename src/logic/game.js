const basic = ["rock", "paper", "scissors"];
//const bonus = ["rock", "spock", "paper", "lizard", "scissors"];

/**
 * Game class performs logic functions for the rock paper scissors game
 */
class Game {
  constructor() {
    this._choices = basic;
    this._players = [
      { id: 1, name: "You", score: 0, choice: -1 },
      { id: 2, name: "The House", score: 0, choice: -1}
    ];
    this._winner = null;
  }

  // Getter and Setters

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
   * Returns the player object for given player id
   *  @param {number} player - the player id number
   */
  getPlayer(player) {
    if (this.isValidPlayer(player-1)) {
      return this._players[player-1];
    }
    return null;
  }

  /**
   * Returns the winner of the current round
   *  @returns {Object}
   */
  get winner() {
    return this._winner;
  }

  // Helper functions

  /**
   * Returns a random value within the range of available choices
   */
  randomChoice() {
    return Math.floor(Math.random() * this._choices.length);
  }

  /**
   * Returns true if the given choice is valid
   *  @param {number} choice - numeric index of choice
   *  @returns {boolean}
   */
  isValidChoice(choice) {
    return (choice >= 0 && choice < this._choices.length);
  }

  /**
   * Returns true if the given player is valid
   *  @param {number} player - numeric index of player
   *  @returns {boolean}
   */
  isValidPlayer(player) {
    return (player >= 0 && player < this._players.length);
  }

  /**
   * Returns true if all players have picked a choice
   *  @returns {boolean}
   */
  _allPlayersHavePicked() {
    for (let i=0; i<this._players.length; i++) {
      if (!this.isValidChoice(this._players[i].choice)) return false;
    }
    return true;
  }

  /**
   * Returns which player is the winner
   *  @param {number} p1 numeric index of player one choice (0..n-1)
   *  @param {number} p2 numeric index of player two choice (0..n-1)
   *  @returns 0 if tie, 1 if player 1, 2 if player 2
   */
  _checkWinner(p1, p2) {
    // This works by splitting the list of options in half using the first
    // choice as the pivot and wrapping at the ends. If the second choice
    // is in the "high" half it wins, if it is in the low half it loses.
    // Correct choice array order is required for correct response.
    const mod = (a, b, c = a % b) => (c < 0) ? c + b : c;
    const count = this._choices.length;

    if (p1 === p2) return 0;                        // Tie
    if (mod(p1 - p2, count) < count / 2) return 1;  // Player one wins
    else return 2;                                  // Player two wins
  }

  // Game State handling

  /**
   * Sets a given player's choice
   *  @param {number} player - Player id
   *  @param {number} choice - Choice id
   */
  setPlayerChoice(player, choice) {
    if (this.isValidChoice(choice) && this.isValidPlayer(player-1)) {
      this._players[player-1].choice = choice;
    }
  }

  /**
   * Scores the game and sets the winner
   */
  scoreGame() {
    if (this._allPlayersHavePicked()) {
      const winner = this._checkWinner(
        this._players[0].choice,
        this._players[1].choice
      );
      if (winner) {
        this._players[winner-1].score++;
        this._winner = this._players[winner-1];
      } else {
        this._winner = { id: 0, name: "Tie", score: -1, choice: -1}
      }
    }
  }

  /**
   * Sets game state to round start
   */
  newRound() {
    for (let i=0; i<this._players.length; i++) {
      this._players[i].choice = -1;
    }
    this._winner = null;
  }

  /**
   * Resets the game
   */
  resetGame() {
    for (let i=0; i<this._players.length; i++) {
      this._players[i].choice = -1;
      this._players[i].score = 0;
    }
    this._winner = null;
  }
}

export default Game;
