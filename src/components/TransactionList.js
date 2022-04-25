import React, { Component } from "react";

import TransactionItem from "./TransactionItem";
import SumTransaction from "./SumTransaction";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default class TransactionList extends Component {
  render() {
    function transactionItem(name, pln, amount, removeItem) {
      return { name, pln, amount, removeItem };
    }

    const listItems = this.props.list.map((list, i) => {
      return (
        <TransactionItem
          key={i}
          name={list.name}
          amount={list.amount}
          pln={list.pln}
          removeItem={this.props.removeListItem.bind(this, i)}
        />
      );
    });

    function sumProperty(arr, type) {
      return arr.reduce((total, obj) => {
        return total + obj.props[type];
      }, 0);
    }

    let totalAmountEuro = sumProperty(listItems, "amount");
    let totalAmountPln = sumProperty(listItems, "pln");

    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Amount(PLN)</TableCell>
                <TableCell align="right">Amount(Euro)</TableCell>
                <TableCell align="right">Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listItems?.map((listItems, i) => (
                <TableRow key={listItems.i}>
                  <TableCell>{transactionItem.name}</TableCell>
                  <TableCell align="right">{transactionItem.pln}</TableCell>
                  <TableCell align="right">{transactionItem.amount}</TableCell>
                  <TableCell align="right">
                    {transactionItem.removeItem}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
              {listItems?.map((list, i) => (
                <TableRow key={list.i}>
                  <TableCell align="right">{listItems.name}</TableCell>
                  <TableCell align="right">{listItems.pln}</TableCell>
                  <TableCell align="right">{listItems.amount}</TableCell>
                  <TableCell align="right">{listItems.removeItem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
