import React from "react";
// import ValidationNameError from "./ValidationNameError";
// import ValidationAmountError from "./ValidationAmountError";

const AddTransaction = ({
  name,
  amount,
  pln,
  handleNameChange,
  handleAmountChange,
  addItem,
  validationNameError,
  validationAmountError,
}) => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="transactionName">Name:</label>
          <input
            type="text"
            name="transactionName"
            id="transactionName"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="transactionValue">Amount (Pln)</label>
          <input
            type="number"
            id="transactionValue"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button onClick={addItem}>add transaction</button>
        <div>
          {/* {validationNameError ? <ValidationNameError /> : null}
        {validationAmountError ? <ValidationAmountError /> : null} */}
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
