import React, { useState } from "react";
import "./index.css"


export default function App() {
  const emojicollecion = {
    "😊": "Smiling Emoji",
    "😂": "Laughining Emoji",
    "😍": "Loving Emoji",
    "😎": "Cool Emoji",
    "😔": "Sad Emoji",
    "😭": "Crying Emoji",
    "🐵": "Monkey Emoji",
    "🗣": "Speaking Head"
  };

  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Result will Appear Here");

  const emojis = Object.keys(emojicollecion);

  function handleChange(e) {
    let inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if (emojicollecion[inputEmoji]) {
      setMeaning(emojicollecion[inputEmoji]);
    } else {
      setMeaning("Oops..! Emoji is Not present in Database");
    }
  }

  function emojiClickHandler(e) {
    setMeaning(emojicollecion[e]);
  }

  return (
    <div className="App">
      <input
        value={emoji}
        onChange={handleChange}
        placeholder="Insert an Emoji to Know Its Meaning"
        style={{
          fontSize: "20px",
          height: "30px",
          width: "80vw",
          textAlign: "center"
        }}
      />
      <h3>{meaning}</h3>

      {emojis.map((e) => (
        <span
          key={e}
          onClick={() => emojiClickHandler(e)}
          style={{ fontSize: "30px", margin: "5px", cursor: "pointer" }}
        >
          {e}
        </span>
      ))}
    </div>
  );
}
