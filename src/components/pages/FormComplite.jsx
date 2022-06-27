import React from "react";
import { useSelector } from "react-redux";
import IMGgreentick from "../img/green-tick.svg"; // load image
// import "./styles.scss";
import "./FormComplite.css";

function FormUserResult({ pageTitle, successMessage }) {
  // Get Redux Form State and output to JSON format
  const state = useSelector((state) => state);
  const stateOutput = `JSON Data Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;
  console.log(stateOutput); // output to console.log

  return (
    <div className="wrapper">
      <div className="form-complete">
        <h2>{pageTitle || "Confirmation"}</h2>

        <img
          className="fade-in-image"
          src={IMGgreentick}
          alt={successMessage || "Success!"}
        />

        <p>{successMessage || "Thank you, please check your email!"}</p>
      </div>

      <div className="code-output">
        <pre>{stateOutput}</pre>
      </div>
    </div>
  );
}

export default FormUserResult;
