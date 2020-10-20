import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// sass활용
// import SassComponent from "./SassComponent";
// import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponents";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> */}
        {/* <CSSModule /> */}
        <StyledComponent />
      </div>
    );
  }
}

export default App;
