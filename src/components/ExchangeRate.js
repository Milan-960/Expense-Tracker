import React from "react";

const ExchangeRate = ({ exchangeRate }) => {
  return (
    <div>
      <h3>
        1 EURO = <span>{exchangeRate}</span>
        PLN
      </h3>
    </div>
  );
};

export default ExchangeRate;
