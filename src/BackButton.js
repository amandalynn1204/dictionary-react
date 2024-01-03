import React from "react";
import "./BackButton.css";

export default function (props) {
  if (props.ready === false) {
    return null;
  } else {
    return (
      <div className="BackButton">
        <a href="#back-to-top">Back to top</a>
      </div>
    );
  }
}
