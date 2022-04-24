import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

let list = [];
let storedList = localStorage.getItem("storedTasks");

if (storedList) {
  list = JSON.parse(storedList);
}

ReactDOM.render(
  <React.StrictMode>
    <App storedList={list} />
  </React.StrictMode>,
  document.getElementById("root")
);

// document.addEventListener("DOMContentLoaded", function () {
//   ReactDom.render(<App storedList={list} />, document.querySelector("#root"));
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
