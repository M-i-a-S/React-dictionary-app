import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="search-bar" onSubmit={handleSearch}>
        <input type="search" onChange={handleSearchWord} />
      </form>
    </div>
  );
}
