import React from "react";
import { Router, Link } from "@reach/router";

import "./App.css";

import Details from "./components/Details";
import List from "./SWSH/List";

const App = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="details">Details</Link>
      <Router>
        <List path="/" />
        <Details path=":species" />
      </Router>
    </div>
  );
};

export default App;
