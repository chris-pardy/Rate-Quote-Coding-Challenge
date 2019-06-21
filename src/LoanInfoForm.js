import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css'

const LoanInfoForm = ({ handleChange }) => (
  <div className="form">
  <Form>
  <div className="grid">
    <Form.Group>
    <Form.Label>Loan Size</Form.Label>
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

    <Form.Group>
    <Form.Label>Property Type</Form.Label>
    <Form.Control as="select"
      required
      id="propertyType"
      name="propertyType"
      onChange={handleChange}
    >
      <option value="">Please choose an property type</option>
      <option value="SingleFamily">Single Family</option>
      <option value="Condo">Condo</option>
      <option value="Townhouse">Townhome</option>
      <option value="MultiFamily">Multi-Family</option>
    </Form.Control>
    </Form.Group>

    <Form.Group>
    <Form.Label>Credit Score</Form.Label>
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

    <Form.Group>
    <Form.Label>Occupancy</Form.Label>
    <Form.Control as="select"
      required
      id="occupancy"
      name="occupancy"
      onChange={handleChange}
    >
      <option value="">Please choose an occupancy type</option>
      <option value="Primary">Primary Residence</option>
      <option value="Secondary">Second Home</option>
      <option value="Investment">Investment Property</option>
    </Form.Control>
    </Form.Group>

    <div></div>

    <Button type="submit" size="lg" className="grid-right">Quote Rates</Button>
    </div>
  </Form>
  </div>
)

export default LoanInfoForm
