import React from "react";
import "./InfoPage.css";

function InfoPage(props) {
  return (
    <div className="InfoPage">
      <div className="Content">
        <div className="ContentLine Line1">BestRunnerApp v 1.0</div>
        <div className="ContentLine Line2">
          Powered by{" "}
          <a href="https://ru.reactjs.org/" className="LineHref">
            React 17.0.1{" "}
          </a>
          /{" "}
          <a href="https://redux.js.org/" className="LineHref">
            Redux 4.2
          </a>
        </div>
        <div className="ContentLine Line3">by Artyom Lipatov</div>
      </div>
    </div>
  );
}

export default InfoPage;
