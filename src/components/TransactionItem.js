import React from "react";

const TransactionItem = ({ name, amount, pln, removeItem }) => {
  return (
    <div className="TItem">
      <li>
        <span>{name}</span>
        <span>
          <span>{pln}pln</span>
        </span>
        <span>
          <span>{amount}Euro</span>
        </span>
        <button onClick={removeItem}>Delete</button>
      </li>
    </div>
  );
};

export default TransactionItem;
