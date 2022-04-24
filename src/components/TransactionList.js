import React, { Component } from "react";
import PropTypes from "prop-types";

import TransactionItem from "./TransactionItem";
import SumTransaction from "./SumTransaction";

export default class TransactionList extends Component {
  render() {
    const listItems = this.props.list.map((elem, i) => {
      return (
        <TransactionItem
          key={i}
          name={elem.name}
          amount={elem.amount}
          pln={elem.pln}
          removeItem={this.props.removeListItem.bind(this, i)}
        />
      );
    });

    const maxElementEuro = Math.max.apply(
      Math,
      listItems.map((item) => item.props.amount)
    );
    const maxElementPln = Math.max.apply(
      Math,
      listItems.map((item) => item.props.pln)
    );
    const maxValueObject = listItems.filter(
      (item) => item.props.amount === maxElementEuro
    );
    const maxValueNameArr = maxValueObject.map((item) => item.props.name);

    function sumProperty(arr, type) {
      return arr.reduce((total, obj) => {
        return total + obj.props[type];
      }, 0);
    }

    let totalAmountPln = sumProperty(listItems, "amount").toFixed(2);
    let totalAmountEuro = sumProperty(listItems, "pln").toFixed(2);

    return (
      <div>
        <ul>
          <label>title</label>
          <div>{listItems}</div>
        </ul>
        {listItems.length ? (
          <div>
            <SumTransaction
              totalAmountEuro={totalAmountEuro}
              totalAmountPln={totalAmountPln}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

TransactionList.propTypes = {
  list: PropTypes.array.isRequired,
};

// const TransactionList = () => {
//   const myLists = ["A", "B", "C"];

//   return (
//     <>
//       <h1>welcome</h1>
//       <ul>{myLists}</ul>
//     </>
//   );
// };

// export default TransactionList;
