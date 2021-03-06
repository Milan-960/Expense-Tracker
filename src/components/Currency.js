import React, { Component } from "react";
import axios from "axios";

import ExchangeRate from "./ExchangeRate";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeRate: 0,
      list: this.props.storedList,
      name: "",
      amount: "",
      pln: "",
      validationNameError: false,
    };

    this.add = this.add.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    let apiURL = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";
    axios.get(apiURL).then((res) => {
      const apiExchangeRate = res.data[0].rates[7].mid;
      this.setState({ exchangeRate: apiExchangeRate });
    });
  }

  handleNameChange(event) {
    let nameVal = event.target.value;
    this.setState({ name: nameVal });
  }

  handleAmountChange(event) {
    let amountVal = event.target.value;
    this.setState({
      amount: +amountVal,
    });
  }

  add(event) {
    event.preventDefault();

    let nameVal = document.getElementById("transactionName").value;
    let amountVal = document.getElementById("transactionValue").value;

    const nameValidator = new RegExp("^[a-zA-Z ]+$");
    const amountValidator = new RegExp("^-?(?!0.)\\d+$");
    const isNameValid = nameValidator.test(nameVal);
    const isAmountValid = amountValidator.test(amountVal);

    const newList = [
      {
        name: this.state.name,
        pln: this.state.amount,
        amount: +(this.state.amount / this.state.exchangeRate).toFixed(2),
      },
      ...this.state.list,
    ];

    if (isNameValid && isAmountValid) {
      this.setState({ list: newList, name: "", amount: "" });
    } else if (isNameValid && !isAmountValid) {
      this.setState({
        name: this.state.name,
        amount: "",
      });
    } else if (!isNameValid && isAmountValid) {
      this.setState({
        name: "",
        amount: this.state.amount,
      });
    } else {
      this.setState({
        validationNameError: true,
        name: "",
        amount: "",
      });
    }

    let updatedList = this.state.list;

    updatedList = newList;

    if (isNameValid && isAmountValid) {
      this.setState({ storedList: updatedList });
      this.updatedLocalStorage(updatedList);
    }
  }

  remove(index) {
    this.setState({
      list: this.state.list.filter((event, i) => i !== index),
    });
    let updatedList = this.state.list;
    updatedList = updatedList.filter((event, i) => i !== index);
    this.setState({ storedList: updatedList });
    this.updatedLocalStorage(updatedList);
  }

  updatedLocalStorage(updatedList) {
    localStorage.setItem("storedTasks", JSON.stringify(updatedList));
  }

  render() {
    const { exchangeRate, name, amount, pln, list, validationNameError } =
      this.state;

    return (
      <div className="currency">
        <ExchangeRate exchangeRate={exchangeRate} />
        <AddTransaction
          addItem={this.add}
          name={name}
          pln={pln}
          amount={amount}
          handleNameChange={this.handleNameChange}
          handleAmountChange={this.handleAmountChange}
          list={list}
          validationNameError={validationNameError}
        />
        <TransactionList list={list} removeListItem={this.remove} />
      </div>
    );
  }
}

export default Currency;
