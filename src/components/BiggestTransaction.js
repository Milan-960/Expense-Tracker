import React from "react";

const BiggestTransaction = ({
  maxValueName,
  maxElementEuro,
  maxElementPln,
}) => {
  return (
    <div>
      <h4>{maxValueName}</h4>
      <div>
        <span>{maxElementPln}</span>
      </div>
      <div>
        <span>{maxElementEuro}</span>
      </div>
    </div>
  );
};

export default BiggestTransaction;
