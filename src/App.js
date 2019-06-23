import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux';
import { store } from './redux'; 
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
      <Provider store={store}>
        <Fragment>
          <Header />
          <main>
            <LoanInfoForm
            criteria={criteria} handleChange={this.handleChange}/>
          </main>
          <Footer />
        </Fragment>
      </Provider>
    )
  }
}

export default App;
