import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0
    }
  }
  makeDeposit = (e) => {
    e.preventDefault();
    const newBalance = this.state.balance + parseInt(this.input.value);
    this.setState({
      balance: newBalance
    })
    this.input.value = "";
  }
  makeWithdrawal = (e) => {
    e.preventDefault();
    const newBalance = Math.max(this.state.balance - parseInt(this.input.value),0);
    this.setState({
      balance: newBalance
    })
    this.input.value = "";
  }
  render() {
    let balanceClass = 'balance';
    if(this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" name="amount" ref={(input) => this.input = input} placeholder="enter an amount" />
        <input onClick={this.makeDeposit} type="button" value="Deposit" />
        <input onClick={this.makeWithdrawal} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
