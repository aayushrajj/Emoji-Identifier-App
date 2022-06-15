import React from "react";
import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Smile",
  "🤔": "Thinking",
  "🤗": "Hugging",
  "🤫": "Sushing",
  "😂": "Tears of joy face",
  "🙈": "See no evil monkey",
  "❤️": "Love",
  "🔥": "Fire",
  "🌚": "New moon face",
  "🤠": "Cowboy hat face",
  "🙃": "Upside down face",
  "😑": "Annoyance",
  "😶": "Face without mouth"
};

// this function converts given object into array
var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  //processing
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji not in the database yet";
    }
    setMeaning(meaning); //react call to show output
  }

  //processing
  function emojiClickHandler(emoji) {
    console.log("Clicked!", { emoji });
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="nav-head">🌚 Know your Emoji 🌚</h1>
      </nav>
      <div className="input-area">
        <input
          onChange={emojiInputHandler}
          placeholder="paste your emoji here"
        ></input>
      </div>
      <div className="output-area">
        {/* this is the actual output set by REACT using USESTATE */}
        <h1> {meaning} </h1>
      </div>
      <div className="database-area">
        <h3>Click on any Emoji to know it's meaning</h3>
        {knownEmojis.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer className="footer">
        <h3 className="footer-head">About</h3>
        <p>
          <strong>💕 Just a simple Emoji Indetifier 💕</strong>
        </p>
        <ul className="list-footer">
          <li className="list-footer-item">
            <a
              className="link"
              href="https://github.com/aayushrajj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/github.svg" alt="github" />
            </a>
          </li>
          <li className="list-footer-item">
            <a
              className="link"
              href="https://linkedin.com/in/ayush-raj-0309"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className="list-footer-item">
            <a
              className="link"
              href="https://twitter.com/AyushRajgupt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/twitter.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

/*

 Flow in React : VISER
 VIEW --> INTERACT --> STATE IN EVENT HANDLER --> RENDER
 
*/
