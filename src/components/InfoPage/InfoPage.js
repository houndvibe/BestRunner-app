import React from "react";
import "./InfoPage.css";

function InfoPage(props) {
  return (
    <div className="InfoPage">
      <div className="Content">
        {props.data.counter}
        <button onClick={props.data.onAdd}>add</button>
        <button onClick={props.data.onSub}>sub</button>
        <div className="ContentLine Line1">BestRunnerApp v 1.0</div>
        <div className="ContentLine Line2">
          Powered by{" "}
          <a href="https://ru.reactjs.org/" className="LineHref">
            React v17.0.1{" "}
          </a>
          /{" "}
          <a href="https://redux.js.org/" className="LineHref">
            Redux v4.0.5
          </a>
        </div>
        <div className="ContentLine Line3">by Artyom Lipatov</div>
      </div>
    </div>
  );
}

export default InfoPage;
