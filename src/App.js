import React from "react";

import "./App.css";

import Title from "./components/Title";
import Currency from "./components/Currency";

const App = () => {
  let list = [];
  let storedList = localStorage.getItem("storedTasks");

  if (storedList) {
    list = JSON.parse(storedList);
  }

  return (
    <>
      <div className="currency">
        <Title />
        <Currency storedList={list} />
      </div>
    </>
  );
};

export default App;
