
const API = "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes"

export const getRatesThunk = ({ loanSize, creditScore, propertyType, occupancy }) => (
  dispatch => {
    dispatch(getRates({ loanSize, creditScore, propertyType, occupancy }));
    fetch(
      `${API}?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`,
      {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'RG-AUTH 71d50f56-6377-4196-9823-6f61b512899c'
        })
      }
    ).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Sorry, something went wrong. Please try again. ')
      }
    })
    .then(response => dispatch(ratesLoaded(response)))
    .catch(error => {
      console.error(error);
    })
  }
)

export const GetRatesType = 'GetRates';
export const getRates = ({ loanSize, creditScore, propertyType, occupancy }) => ({
  type: GetRatesType,
  payload: {
    loanSize,
    creditScore,
    propertyType,
    occupancy
  }
})

export const RatesLoadedType = 'RatesLoaded';
export const ratesLoaded = ({ rateQuotes }) => ({
  type: RatesLoadedType,
  payload: {
    rateQuotes
  }
})