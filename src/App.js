import React, { Component, Fragment } from 'react'
import LoanInfoForm from './LoanInfoForm'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      rateQuotes: []
    }
  }

  render () {
    return (
      <Fragment>
        <LoanInfoForm />
      </Fragment>
    )
  }
}

export default App;
