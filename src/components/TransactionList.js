import React, { Component } from "react";
import PropTypes from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
      listItems.map((item) => item.props.pln)
    );
    const maxElementPln = Math.max.apply(
      Math,
      listItems.map((item) => item.props.amount)
    );
    const maxValueObject = listItems.filter(
      (item) => item.props.amount === maxElementEuro,
      (item) => item.props.amount === maxElementPln
    );

    return (
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Amount(PLN)</TableCell>
                <TableCell align="right">Amount(Euro)</TableCell>
                <TableCell align="right">Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listItems.map((listItems) => (
                <TableRow key={listItems.name}>
                  <TableCell component="th" scope="row">
                    {listItems.name}
                  </TableCell>
                  <TableCell align="right">{listItems.pln}</TableCell>
                  <TableCell align="right">{listItems.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ul>
          <div>{listItems}</div>
          {/* <span>
            <span>{listItems.name}</span>
            <span>{listItems.pln}</span>
          </span>
          <span>
            <span>{listItems.amount}</span>
          </span> */}
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
