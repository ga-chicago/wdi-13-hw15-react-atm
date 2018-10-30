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
      balance: parseInt(this.inputBox.value)
    })
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input onClick={this.handleDeposit} type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
