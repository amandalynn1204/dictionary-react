import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms === null) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <h4>Similar:</h4>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
