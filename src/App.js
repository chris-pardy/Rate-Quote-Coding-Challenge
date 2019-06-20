import React, { Component, Fragment } from 'react'
import LoanInfoForm from './LoanInfoForm'
import RateQuotesTable from './RateQuotesTable'
import Header from './Header'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      rateQuotes: []
    }
  }

  // may not need rateQuotes in App's state. It is handled in RateQuotesTable's state.

  render () {
    return (
      <Fragment>
        <Header />
        <main>
          <LoanInfoForm />
          <RateQuotesTable />
        </main>
      </Fragment>
    )
  }
}

export default App;
