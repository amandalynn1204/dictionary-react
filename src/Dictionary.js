import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="text-center">
        <input
          type="search"
          placeholder="Search any word.."
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
