import React from "react";

const SumTransaction = ({ totalAmountEuro, totalAmountPln }) => {
  return (
    <div>
      <div>
        <div>
          <p>
            <span>Sum: </span>
            {totalAmountPln} <span>PLN</span>({totalAmountEuro}{" "}
            <span>Euro</span>)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SumTransaction;
