import React from "react";

import ValidationNameError from "./Error/ValidationNameError";

const AddTransaction = ({
  name,
  amount,
  handleNameChange,
  handleAmountChange,
  addItem,
  validationNameError,
}) => {
  return (
    <div className="form">
      <form>
        <div className="from_input">
          <label htmlFor="transactionName">Name:</label>
          <input
            type="text"
            name="transactionName"
            id="transactionName"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="from_input">
          <label htmlFor="transactionValue">Amount (Pln)</label>
          <input
            type="number"
            id="transactionValue"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button onClick={addItem}>add transaction</button>
        <div>{validationNameError ? <ValidationNameError /> : null}</div>
      </form>
    </div>
  );
};

export default AddTransaction;
