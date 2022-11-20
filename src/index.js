import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Game from "./game.jsx";
import "./game.css";
import LoginPage from "./components/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}></Route>
//       <Route path="/game" element={<Game />}></Route>
//     </Routes>
//   </BrowserRouter>
// );
