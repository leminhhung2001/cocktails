import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Container />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
