import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [searchWord, setSearchWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1> What are you looking for today? </h1>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleSearchWord}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
