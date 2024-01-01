import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>/{props.results.phonetic}/</p>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
