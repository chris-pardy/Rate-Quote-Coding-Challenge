import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import RateQuotesTable from './RateQuotesTable'
import { getRatesThunk } from './redux/actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css'

const LoanInfoContainer = (props) => {
  const { rateQuotes, submitted, loading, error } = useSelector(state => state);
  const handleSubmit = bindActionCreators(getRatesThunk,useDispatch());
  return <LoanInfoForm {...props} rateQuotes={rateQuotes} submitted={submitted}
                      loading={loading} error={error} handleSubmit={handleSubmit} />
}

const LoanInfoForm = ({ criteria, rateQuotes, submitted, loading, error, handleChange, handleSubmit }) => {
  return <Fragment>
  <div className="form">
  <Form onSubmit={event => {
    event.preventDefault();
    handleSubmit(criteria);
  }}>
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
    rateQuotes={rateQuotes}
    submitted={submitted}
    loading={loading}
    error={error}
  />
  </Fragment>
}

export default LoanInfoContainer
