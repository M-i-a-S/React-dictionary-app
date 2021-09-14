import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
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
