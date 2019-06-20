import React from 'react'
import './App.css'

const LoanInfoForm = () => (
  <form>
    <label for="loanSize">Loan Size</label>
    <div className="currency-field">
      <span className="currency-sign">$</span>
      <input required type="number" id="loanSize" name="loanSize" />
    </div>

    <label for="creditScore">Credit Score</label>
    <input
      required
      type="number"
      step="1"
      min="300"
      max="800"
      id="creditScore"
      name="creditScore"
    />

    <label for="propertyType">Property Type</label>
    <select required id="propertyType" name="propertyType">
      <option value="">Please choose an property type</option>
      <option value="SingleFamily">Single Family</option>
      <option value="Condo">Condo</option>
      <option value="Townhouse">Townhome</option>
      <option value="MultiFamily">Multi-Family</option>
    </select>

    <label for="occupancy">Occupancy</label>
    <select required id="occupancy" name="occupancy">
      <option value="">Please choose an occupancy type</option>
      <option value="Primary">Primary Residence</option>
      <option value="Secondary">Second Home</option>
      <option value="Investment">Investment Property</option>
    </select>

    <button type="submit">Quote Rates</button>
  </form>
)

export default LoanInfoForm
