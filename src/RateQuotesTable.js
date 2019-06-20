import React, { Component, Fragment } from 'react'
import './App.css'

class RateQuotesTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rateQuotes: []
    }
  }

  render () {
    const { rateQuotes } = this.state

    return (
      <Fragment>
        {rateQuotes.map(quote => (
        <table>
          <tr>
            <th>Lender</th>
            <th>Product</th>
            <th>Rate</th>
            <th>Closing Costs</th>
            <th>Monthly Payment</th>
            <th>APR</th>
          </tr>
          <tr>
            <th>quote.lenderName</th>
            <th>quote.loanType</th>
            <th>quote.interestRate</th>
            <th>quote.closingCosts</th>
            <th>quote.monthlyPayment</th>
            <th>quote.apr</th>
          </tr>
        </table>
      ))}
      </Fragment>
    )
  }

}

export default RateQuotesTable
