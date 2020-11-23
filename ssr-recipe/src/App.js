import React from "react";
import Menu from "./components/Menu";
import { Router } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Router path="/red" component={RedPage} />
      <Router path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
