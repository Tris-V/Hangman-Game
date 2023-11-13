import React from "react";
import "./HelpOverlay.css";

// Overlay that displays rules to the user when the help button is clicked
const HelpOverlay = ({ onClose }) => {
  return (
    <div className="HelpOverlay">
      <div className="HelpContent">
        <h2>Rules</h2>
        <p>
          The object of hangman is to guess the hidden word before the stick
          figure is hung. You must select letters to narrow the word down. The
          game continues until you guess the word or run out of guesses, and the
          stick figure is hung. This hangman game's words are all food-related,
          so keep this in mind.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HelpOverlay;
