import React, { Component, Fragment } from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'

import './App.css'

class RateQuotesTable extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { rateQuotes, submitted, loading, error } = this.props
    console.log('here is the state within render:', this.state)

    if (!submitted) {
      return <p></p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    if (loading) {
      return (
      <Fragment>
        <p>Grabbing some great rates from our database...</p>
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Grabbing some great rates from our database...</span>
          </Spinner>
        </div>
      </Fragment>
    )
    }

    if (submitted && rateQuotes.length === 0) {
      return <p>Sorry, no rates match that criteria.</p>
    }

    return (
      <Fragment>
      <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lender</th>
            <th>Product</th>
            <th>Rate</th>
            <th>Closing Costs</th>
            <th>Monthly Payment</th>
            <th>APR</th>
          </tr>
        </thead>
        <tbody>
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
      </Table>
      </div>
      </Fragment>
    )
  }

}

export default RateQuotesTable
