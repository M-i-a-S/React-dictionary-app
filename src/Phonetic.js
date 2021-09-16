import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  return (
    <div className="Phonetic">
      <span className="SoundIcon" onClick={playAudio}>
        {" "}
        🔊{" "}
      </span>{" "}
      <span className="Text">/{props.phonetic.text}/</span>
    </div>
  );
}
