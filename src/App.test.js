import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RateQuotesTable from './RateQuotesTable'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('formats interest rate', () => {
  const instance = new RateQuotesTable()
  expect(instance.interestRateFormat(4.768)).toBe('4.768%')
})

it('formats dollars', () => {
  const instance = new RateQuotesTable()
  expect(instance.dollarFormat(6092.345000000001)).toBe('$6,092.35')
})

it('formats APR', () => {
  const instance = new RateQuotesTable()
  expect(instance.aprFormat(4.8289980348927175
)).toBe('4.829%')
})
