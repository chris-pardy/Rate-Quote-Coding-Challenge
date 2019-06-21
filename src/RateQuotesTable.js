import React, { Component, Fragment } from 'react'
import './App.css'

const API = "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes"

// Format data in table and write tests for this
// const interestRateFormat = value => {
//   return value + '%'
// }

class RateQuotesTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rateQuotes: [],
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch(`${API}?loanSize=10000&creditScore=700&propertyType=Condo&occupancy=Primary `, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'RG-AUTH 71d50f56-6377-4196-9823-6f61b512899c'
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry, something went wrong. Please try again. ')
        }
      })
      .then(response => this.setState({ rateQuotes: response.rateQuotes, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
    }

  render () {
    const { rateQuotes, loading, error } = this.state
    console.log('here is the state within render:', this.state)

    if (error) {
      return <p>{error.message}</p>
    }

    if (loading) {
      return <p>Grabbing some great rates from our database</p>
    }

    if (rateQuotes.length === 0) {
      return <p>Sorry, we were not able to find any rates to match that criteria.</p>
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
