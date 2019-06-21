import React, { Component, Fragment } from 'react'
import RateQuotesTable from './RateQuotesTable'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css'

const API = "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes"

class LoanInfoForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rateQuotes: [],
      submitted: false,
      loading: false,
      error: null
    }
  }

  getRates () {
    const { criteria } = this.props
    this.setState({ loading: true })
    console.log('your function still ran')

    fetch(`${API}?loanSize=${criteria.loanSize}&creditScore=${criteria.creditScore}&propertyType=${criteria.propertyType}&occupancy=${criteria.occupancy} `, {
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
      .then(response => this.setState({ rateQuotes: response.rateQuotes, loading: false}))
      .catch(error => this.setState({ error, loading: false }))
    }

  handleSubmit = event => {
    console.log('got to handle submit step!')
    event.preventDefault()
    this.setState({ submitted: true })
    this.getRates()
  }

  render() {
    const { handleChange } = this.props
    return (
      <Fragment>
      <div className="form">
      <Form onSubmit={this.handleSubmit}>
      <div className="grid">

      <div className="align-center">
        <h6>Loan Size</h6>
      </div>

        <Form.Group>
        <div className="currency-field">
          <span className="currency-sign">$</span>
          <Form.Control
          className="currency-field-input"
            required
            type="number"
            id="loanSize"
            name="loanSize"
            onChange={handleChange}
          />
        </div>
        </Form.Group>

        <div className="align-center">
          <h6>Property Type</h6>
        </div>

        <Form.Group>
        <Form.Control as="select"
          required
          id="propertyType"
          name="propertyType"
          onChange={handleChange}
        >
          <option value="">Choose a property type</option>
          <option value="SingleFamily">Single Family</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhome</option>
          <option value="MultiFamily">Multi-Family</option>
        </Form.Control>
        </Form.Group>

        <div className="align-center">
          <h6>Credit Score</h6>
        </div>

        <Form.Group>
        <Form.Control
          required
          type="number"
          step="1"
          min="300"
          max="800"
          id="creditScore"
          name="creditScore"
          onChange={handleChange}
        />
        </Form.Group>

        <div className="align-center">
          <h6>Occupancy</h6>
        </div>

        <Form.Group>
        <Form.Control as="select"
          required
          id="occupancy"
          name="occupancy"
          onChange={handleChange}
        >
          <option value="">Choose an occupancy type</option>
          <option value="Primary">Primary Residence</option>
          <option value="Secondary">Second Home</option>
          <option value="Investment">Investment Property</option>
        </Form.Control>
        </Form.Group>

        <div></div>
        <div></div>
        <div></div>

        <Button type="submit" size="lg" className="grid-right">Quote Rates</Button>
        </div>
      </Form>
      </div>

      <RateQuotesTable
        rateQuotes={this.state.rateQuotes}
        submitted={this.state.submitted}
        loading={this.state.loading}
        error={this.state.error}
      />
      </Fragment>
    )
  }
}

export default LoanInfoForm
