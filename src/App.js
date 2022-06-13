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
  "🤠": "Cowboy hat face",
  "🙃": "Upside down face",
  "😑": "Annoyance",
  "😶": "Face without mouth"
};

var headingColor = "lightblue";

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
      <h1
        style={{
          backgroundColor: headingColor,
          fontSize: "3rem",
          color: "#164e63"
        }}
      >
        {" "}
        Know your Emoji{" "}
      </h1>
      <input onChange={emojiInputHandler}></input>

      {/* this is the actual output set by REACT using USESTATE */}
      <h1 style={{ color: "#581c87" }}> {meaning} </h1>

      <h3 style={{ color: "#fb7185" }}>
        Click on any Emoji to know it's meaning
      </h3>
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
  );
}

/*

 Flow in React : VISER
 VIEW --> INTERACT --> STATE IN EVENT HANDLER --> RENDER
 
*/
