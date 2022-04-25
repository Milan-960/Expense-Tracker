import React from "react";

import "./App.css";

import Test from "./components/Test";

import Title from "./components/Title";
import ExchangeRate from "./components/ExchangeRate";

const App = ({ exchangeRate }) => {
  let list = [];
  let storedList = localStorage.getItem("storedTasks");

  if (storedList) {
    list = JSON.parse(storedList);
  }

  return (
    <>
      <div className="currency">
        <Title />
        <ExchangeRate exchangeRate={exchangeRate} />
        <Test storedList={list} />
      </div>
    </>
  );
};

export default App;
