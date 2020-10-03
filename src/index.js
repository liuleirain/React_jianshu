import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style.js";
import { GlobalIconFont } from "./statics/iconfont/iconfont";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle whiteColor />
    <GlobalIconFont />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
