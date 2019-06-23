import { getRates } from './actions';
import { reducer } from './reducers';

describe('reducers', () => {
  it('returns default state if not initalized', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toMatchObject({
      rateQuotes: [],
      submitted: false,
      loading: false,
      error: null
    });
  });

  it('sets submitted and loaded to true when getting rates', () => {
    expect(
      reducer({
        rateQuotes: [],
        submitted: false,
        loading: false,
        error: null
      }, getRates({
        loanSize: 200000,
        creditScore: 740,
        propertyType: 'Condo',
        occupancy: 'Primary'
      }))).toMatchObject({
        rateQuotes: [],
        submitted: true,
        loading: true,
        error: null
      });
  });
});