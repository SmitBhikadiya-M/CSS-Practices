import ReactDom from "react-dom/client";
import * as React from "react";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
