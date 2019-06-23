
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