import React from "react";
import "./InfoPage.css";

function InfoPage(props) {
  return (
    <div className="InfoPage">
      <div className="InfoPage__Content">
        <div className="InfoPage__ContentLine InfoPage__ContentLine_Line1">
          BestRunnerApp v 1.0
        </div>
        <div className="InfoPage__ContentLine InfoPage__ContentLine_Line2">
          Powered by{" "}
          <a
            href="https://ru.reactjs.org/"
            className="InfoPage__ContentLine__LineHref"
          >
            React v17.0.1{" "}
          </a>
          /{" "}
          <a
            href="https://redux.js.org/"
            className="InfoPage__ContentLine__LineHref"
          >
            Redux v4.0.5
          </a>
        </div>
        <div className="InfoPage__ContentLine InfoPage__ContentLine_Line3">
          by Artyom Lipatov
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
