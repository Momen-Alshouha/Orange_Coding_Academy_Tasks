import React, { Component } from 'react';
import Bank from './Bank/Bank'
import { connect } from 'react-redux';

class App extends Component {

render() { 

    return (
      <div>

      <h1>Balance: {this.props.balance}</h1>

      <div>    
        <button  onClick={() => this.props.withdraw(50)}>Withdraw $50</button>
        <button onClick={() => this.props.withdraw(100)}>Withdraw $100</button>
      </div>

      <Bank />

    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);