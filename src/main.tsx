import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // If you have a global CSS file
import App from "./App"; // Adjust if your main component has a different name or path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
