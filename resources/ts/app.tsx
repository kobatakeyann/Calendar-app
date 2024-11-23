import Main from "@/ts/main";
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
