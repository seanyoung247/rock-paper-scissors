
const choices = {
  basic: ["scissors", "paper", "rock"],
  spock: ["scissors", "paper", "rock", "lizard", "spock"]
};
Object.freeze(choices);

const names = {
  basic: "Rock Paper Scissors",
  spock: "Rock Paper Scissors Lizard Spock"
};
Object.freeze(names);

const modes = ["basic", "spock"];
Object.freeze(modes);

/**
 * Game class performs logic functions for the rock paper scissors game
 */
class Game {
  constructor(mode="basic") {
    this._mode = mode;
    this._choices = choices[this._mode];
    this._players = [
      { id: 0, name: "Tie", score: 0, choice: -1 },
      { id: 1, name: "You", score: 0, choice: -1 },
      { id: 2, name: "The House", score: 0, choice: -1}
    ];
    this._winner = null;
  }

  // Getters and Setters

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
   * Returns the current game mode
   *  @returns {string} "basic" or "spock"
   */
  get mode() {
    return this._mode;
  }

  /**
   * Returns the list of allowed game modes
   *  @returns {string[]}
   */
  get modes() {
    return modes;
  }

  /**
   * Sets the game mode and resets the game
   *  @param {string} val - The mode to set: "basic" or "spock"
   */
  set mode(val) {
    const newMode = choices[val];
    if (newMode) {
      this._mode = val;
      this._choices = newMode;
    }
  }

  /**
   * Returns the name of the current game mode.
   *  @returns {string}
   */
  getGameTitle() {
    return names[this._mode];
  }

  /**
   * Returns the names of all the game modes
   *  @returns {string[]}
   */
  getGameTitles() {
    return names;
  }

  /**
   * Returns the player object for given player id
   *  @param {number} player - the player id number
   */
  getPlayer(player) {
    if (this.isValidPlayer(player)) {
      return this._players[player];
    }
    return null;
  }

  /**
   * Returns the number of ties in the current match
   *  @returns {number}
   */
  get ties() {
    return this._players[0].score;
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
    // Player 0 is "Tie", so not a valid player
    return (player > 0 && player < this._players.length);
  }

  /**
   * Returns true if all players have picked a choice
   *  @returns {boolean}
   */
  _allPlayersHavePicked() {
    for (let i=1; i<this._players.length; i++) {
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
    /*
      Based on the win algorithm described in wikipedia article:
      https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons
      The winning player is determined by subtracting the numeric value of
      player two's choice from player one's, then taking the modulo remainder
      modded by number of choices.
      If the remainder is zero, there is a tie. If it is odd player one has
      won. If it is even player two has won.
      The choice array needs to be correctly ordered for the correct response.
     */
    const modr = (x, y) => (x + y) % y;
    const x = p1 - p2;
    return x && (modr(modr(x, this._choices.length), 2) + 1);
  }

  // Game State handling

  /**
   * Sets a given player's choice
   *  @param {number} player - Player id
   *  @param {number} choice - Choice id
   */
  setPlayerChoice(player, choice) {
    if (this.isValidChoice(choice) && this.isValidPlayer(player)) {
      this._players[player].choice = choice;
    }
  }

  /**
   * Scores the game and sets the winner
   */
  scoreGame() {
    if (this._allPlayersHavePicked()) {
      const winner = this._checkWinner(
        this._players[1].choice,
        this._players[2].choice
      );
      this._players[winner].score++;
      this._winner = this._players[winner];
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
    sessionStorage.clear();
  }

  /**
   * Stores the current game state to session storage
   */
  saveGame() {
    sessionStorage.setItem('game_saved', 'true');
    sessionStorage.setItem('game_mode', this._mode);
    for (let i = 0; i < this._players.length; i++) {
      sessionStorage.setItem(`player${i}`, this._players[i].score);
    }
  }

  /**
   * Loads the game state from session storage
   */
  loadGame() {
    this.mode = sessionStorage.getItem('game_mode') || 'basic';
    this._choices = choices[this._mode];
    for (let i = 0; i < this._players.length; i++) {
      this._players[i].score = parseInt(sessionStorage.getItem(`player${i}`) || 0);
    }
  }
}

export default Game;
