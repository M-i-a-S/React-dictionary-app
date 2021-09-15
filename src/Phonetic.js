import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="SoundIcon"
      >
        🔊
      </a>{" "}
      <span className="Text">/{props.phonetic.text}/</span>
    </div>
  );
}
