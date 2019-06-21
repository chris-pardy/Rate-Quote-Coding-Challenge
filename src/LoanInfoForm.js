import React from 'react'
import './App.css'

const LoanInfoForm = ({ handleChange }) => (
  <form>
    <label htmlFor="loanSize">Loan Size</label>
    <div className="currency-field">
      <span className="currency-sign">$</span>
      <input
        required
        type="number"
        id="loanSize"
        name="loanSize"
        onChange={handleChange}
      />
    </div>

    <label htmlFor="creditScore">Credit Score</label>
    <input
      required
      type="number"
      step="1"
      min="300"
      max="800"
      id="creditScore"
      name="creditScore"
      onChange={handleChange}
    />

    <label htmlFor="propertyType">Property Type</label>
    <select
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
    </select>

    <label htmlFor="occupancy">Occupancy</label>
    <select
      required
      id="occupancy"
      name="occupancy"
      onChange={handleChange}
    >
      <option value="">Please choose an occupancy type</option>
      <option value="Primary">Primary Residence</option>
      <option value="Secondary">Second Home</option>
      <option value="Investment">Investment Property</option>
    </select>

    <button type="submit">Quote Rates</button>
  </form>
)

export default LoanInfoForm
