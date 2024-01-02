import React from "react";

export default function Synonyms(props) {
  return (
    <ul className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return <li key={index}>{synonym}</li>;
      })}
    </ul>
  );
}
