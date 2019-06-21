import React, { Component, Fragment } from 'react'
import LoanInfoForm from './LoanInfoForm'
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
  }

  render () {
    const { criteria } = this.state
    return (
      <Fragment>
        <Header />
        <main>
          <LoanInfoForm
          criteria={criteria} handleChange={this.handleChange}/>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
