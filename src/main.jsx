import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import "./style/global.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
