import React from "react";
import { Router } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Router path="/" component={Home} exact={true} />
      <Router path="/about" component={About} />
    </div>
  );
};

export default App;
