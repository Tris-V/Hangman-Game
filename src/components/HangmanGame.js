import React, { Component } from "react";
import { randomWord } from "./Words";
import "./HangmanGame.css";

// Import images from image folder for each hangman guess state
class HangmanGame extends React.Component {
  static defaultProps = {
    maxWrong: 10,
    images: [
      process.env.PUBLIC_URL + "/images/0.GIF",
      process.env.PUBLIC_URL + "/images/1.GIF",
      process.env.PUBLIC_URL + "/images/2.GIF",
      process.env.PUBLIC_URL + "/images/3.GIF",
      process.env.PUBLIC_URL + "/images/4.GIF",
      process.env.PUBLIC_URL + "/images/5.gif",
      process.env.PUBLIC_URL + "/images/6.GIF",
      process.env.PUBLIC_URL + "/images/7.GIF",
      process.env.PUBLIC_URL + "/images/8.GIF",
      process.env.PUBLIC_URL + "/images/9.GIF",
      process.env.PUBLIC_URL + "/images/10.GIF",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // Reset the game
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

  // Show current state of word:
  guessedWord() {
    const { answer, guessed } = this.state;
    return answer.split("").map((ltr) => (guessed.has(ltr) ? ltr : "_"));
  }

  // Handle a guessed letter, add to guessed letters and if a letter is not in answer increase number of wrong guesses
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  // Return an array of letter buttons to render (qwerty order)
  generateButtons() {
    const { handleGuess } = this;
    const { guessed } = this.state;
    return "qwertyuiopasdfghjklzxcvbnm".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  // Render the game
  render() {
    const { nWrong, answer } = this.state;
    const { images, maxWrong } = this.props;

    const gameOutcome =
      answer === this.guessedWord().join("") ? (
        <p>YOU WIN! ٩(^ᗜ^ )و</p>
      ) : nWrong === maxWrong ? (
        <div>
          <p>YOU LOSE! ˙◠˙</p>
          <p>The word was: {answer}</p>
        </div>
      ) : (
        <div>
          <p className="Hangman-word">{this.guessedWord()}</p>
          <p className="Hangman-btns">{this.generateButtons()}</p>
        </div>
      );

    return (
      <div className="Hangman">
        <h1>Hangman: Food edition</h1>
        <img src={images[nWrong]} alt={`${nWrong} wrong guesses`} />
        <p>You get 10 chances to guess the food-related word.</p>
        <p>Wrong guesses: {nWrong}</p>
        {gameOutcome}
        <button id="reset" onClick={this.resetGame}>
          Reset Game
        </button>
      </div>
    );
  }
}

export default HangmanGame;
