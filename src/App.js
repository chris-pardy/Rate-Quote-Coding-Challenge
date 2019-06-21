import React, { Component, Fragment } from 'react'
import LoanInfoForm from './LoanInfoForm'
import RateQuotesTable from './RateQuotesTable'
import Header from './Header'
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      criteria: {
        loanSize: '',
        creditScore: '',
        propertyType: '',
        occupancy: ''
      }
    }
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedCriteria = Object.assign(this.state.criteria, updatedField)
    this.setState({ criteria: editedCriteria })
    console.log(this.state)
  }

  render () {
    const { criteria } = this.state
    return (
      <Fragment>
        <Header />
        <main>
          <LoanInfoForm handleChange={this.handleChange}/>
          <RateQuotesTable criteria={criteria}/>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
