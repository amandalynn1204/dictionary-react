import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    if (response.data.word === undefined) {
      alert("We cannot find that word! Sorry! 😟");
      return null;
    } else {
      setResults(response.data);
    }
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search} className="text-center">
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Search any word.."
                onChange={handleKeywordChange}
                className="search-bar"
              />
              <div className="hints">i.e. sunrise, book, country </div>
            </div>
            <div className="col-sm-3">
              <input type="submit" value="Search" className="search-btn" />
            </div>
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
