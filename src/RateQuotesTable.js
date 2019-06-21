import React, { Component, Fragment } from 'react'
import './App.css'

class RateQuotesTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      error: null
    }
  }

  render () {
    const { loading, error } = this.state
    const { rateQuotes, submitted } = this.props
    console.log('here is the state within render:', this.state)

    if (!submitted) {
      return <p>Enter your info above</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    if (loading) {
      return <p>Grabbing some great rates from our database</p>
    }

    if (submitted && rateQuotes.length === 0) {
      return <p>Sorry, no rates match that criteria.</p>
    }

    return (
      <Fragment>
      <table>
        <tbody>
          <tr>
            <th>Lender</th>
            <th>Product</th>
            <th>Rate</th>
            <th>Closing Costs</th>
            <th>Monthly Payment</th>
            <th>APR</th>
          </tr>
          {rateQuotes.map((quote, i) => (
            <tr key={i}>
              <td>{quote.lenderName}</td>
              <td>{quote.loanType}</td>
              <td>{quote.interestRate}</td>
              <td>{quote.closingCosts}</td>
              <td>{quote.monthlyPayment}</td>
              <td>{quote.apr}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
    )
  }

}

export default RateQuotesTable
