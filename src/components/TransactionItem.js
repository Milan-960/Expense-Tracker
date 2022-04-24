import React from "react";

const TransactionItem = ({ name, amount, pln, removeItem }) => {
  return (
    <div>
      <li>
        <span>{name}</span>
        <span>
          <span>{pln}</span>
        </span>
        <span>{name}</span>
        <span>
          <span>{amount}</span>
        </span>
        <button onClick={removeItem}>x</button>
      </li>
    </div>
  );
};

export default TransactionItem;
