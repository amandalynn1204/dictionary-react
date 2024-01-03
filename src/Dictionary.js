import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import BackButton from "./BackButton";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    if (response.data.word === undefined) {
      alert("We cannot find that word! Sorry! 😟");
      return null;
    } else {
      setResults(response.data);
      setLoaded(true);
    }
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
    setLoaded(true);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    axios.get(photoApiUrl).then(handlePhotoResponse);
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
              <div className="hints">i.e. sunrise, book, country, snow</div>
            </div>
            <div className="col-sm-3">
              <input type="submit" value="Search" className="search-btn" />
            </div>
          </div>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
      <BackButton ready={loaded} />
    </div>
  );
}
