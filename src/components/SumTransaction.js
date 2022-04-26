import React from "react";

const SumTransaction = ({ totalAmountEuro, totalAmountPln }) => {
  return (
    <div className="SumItems">
      <p>
        <span>Sum: </span>
        {totalAmountPln} <span>PLN</span>({totalAmountEuro} <span>Euro</span>)
      </p>
    </div>
  );
};

export default SumTransaction;
