import React from "react";
import "./Error.css";

const ValidationNameError = () => {
  return (
    <div className="form__errors">
      <span>Please, fill in the name of a transaction!</span>;
    </div>
  );
};

export default ValidationNameError;
