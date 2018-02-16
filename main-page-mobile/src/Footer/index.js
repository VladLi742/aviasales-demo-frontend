import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import Inner from "./Inner";
import Bottom from "./Bottom";

// import raiting from "./raiting.svg";
// import apple from "./apple.svg";
// import android from "./android.svg";
// import winPhone from "./win-phone.svg";
// import mobileApp from "./mobile-app.png";

export default function() {
  return (
    <div className="App">
      <Inner />
      <Bottom />
    </div>
  );
}
