import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0
    }
  }
  handleDeposit = (e) => {
    console.log(this.inputBox.value)
    e.preventDefault()
    this.setState({
      balance: parseInt(this.inputBox.value) + this.state.balance
    })
  }
  handleWithdraw = (e) => {
    e.preventDefault()
    this.setState({
      balance: parseInt(this.state.balance) - this.inputBox.value
    })
  }
  render() {
    if(this.state.balance < 0) {
      this.state.balance = 0;
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input onClick={this.handleDeposit} type="button" value="Deposit" />
        <input onClick={this.handleWithdraw}type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
