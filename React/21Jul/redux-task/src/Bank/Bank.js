import React from 'react';
import { connect } from 'react-redux';

class Bank extends React.Component {

  render() {
  return (

    <div>  
      <br />   
      <label>deposit:</label><br />
        <input type="number" onChange={e => this.setState({ number: e.target.value })}/>
    
    <button onClick={(amount) => this.props.deposit(parseInt(this.state.number, 10))}>Confirm</button>
    </div>
    );
   }
  }

const mapStateToProps = state => {
  return { 
    balance: state.balance,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deposit: (amount) => dispatch({type:'deposit', value: amount}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bank);

