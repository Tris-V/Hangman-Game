import React, { Component } from "react";
import HangmanGame from "./components/HangmanGame";
import HelpOverlay from "./components/HelpOverlay";
import "./app.css";

class App extends Component {
  state = {
    showHelp: false,
  };

  // Function to toggle the visibility of the HelpOverlay
  toggleHelp = () => {
    this.setState((prevState) => ({ showHelp: !prevState.showHelp }));
  };

  render() {
    return (
      <div className="App">
        <HangmanGame />
        {this.state.showHelp && <HelpOverlay onClose={this.toggleHelp} />}
        <button id="help" onClick={this.toggleHelp}>
          Help
        </button>
      </div>
    );
  }
}

export default App;

/* https://www.youtube.com/watch?v=-ONUyenGnWw&list=PL2PiTmc7BCvxM_eWD-T52PvXLNxhyFqH3&index=26&t=172s
   https://www.youtube.com/watch?v=jj0W8tYX_q8
   https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral
   https://create-react-app.dev/docs/using-the-public-folder/
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ */
