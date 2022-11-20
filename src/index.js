import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Game from "./game.jsx";
import "./game.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
