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

    // function sumProperty(arr, type) {
    //   return arr.reduce((total, obj) => {
    //     return total + obj.props[type];
    //   }, 0);
    // }

    return (
      <div>
        <ul>
          <div>{listItems}</div>
        </ul>
        <div>
          <SumTransaction
            totalAmountEuro={totalAmountEuro}
            totalAmountPln={totalAmountPln}
          />
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  list: PropTypes.array.isRequired,
};
