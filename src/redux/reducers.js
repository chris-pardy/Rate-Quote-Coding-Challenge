import { GetRatesType } from './actions';

const defaultState = {
  rateQuotes: [],
  submitted: false,
  loading: false,
  error: null
}

export const reducer = (state = defaultState, { type }) => {
  switch(type) {
    case GetRatesType: 
      return {
        ...state,
        submitted: true,
        loading: true
      }
    default:
      return state;
  }
}