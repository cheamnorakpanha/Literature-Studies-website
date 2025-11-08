import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/style.css";
import App from "./app/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);