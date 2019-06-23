import { getRatesThunk, GetRatesType, RatesLoadedType } from './actions';

describe('getRatesThunk', () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Not Setup')));

  it('dispatches getRates Action', () => {
    const dispatch = jest.fn();
    getRatesThunk({
      loanSize: 500000,
      creditScore: 720,
      propertyType: 'Condo',
      occupancy: 'Primary'
    })(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: GetRatesType,
      payload: {
        loanSize: 500000,
        creditScore: 720,
        propertyType: 'Condo',
        occupancy: 'Primary'
      }
    });
  });

  it('dispatches rates loaded action on success', cb => {
    expect.assertions(1);
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        rateQuotes: [
          {
            lenderName: 'My Lender',
            loanType: '5/1 ARM',
            interestRate: 3.75,
            closingCosts: 1000,
            monthlyPayment: 1200,
            apr: 4.125
          }
        ]
      })
    }));
    getRatesThunk({
      loanSize: 500000,
      creditScore: 720,
      propertyType: 'Condo',
      occupancy: 'Primary'
    })(({ type, payload }) => {
      if (type === RatesLoadedType) {
        expect(payload).toEqual({
          rateQuotes: [
            {
              lenderName: 'My Lender',
              loanType: '5/1 ARM',
              interestRate: 3.75,
              closingCosts: 1000,
              monthlyPayment: 1200,
              apr: 4.125
            }
          ]
        });
        cb();
      }
    });
  });

  it('requests rates for service', cb => {
    expect.assertions(1);
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        rateQuotes: [
          {
            lenderName: 'My Lender',
            loanType: '5/1 ARM',
            interestRate: 3.75,
            closingCosts: 1000,
            monthlyPayment: 1200,
            apr: 4.125
          }
        ]
      })
    }));
    getRatesThunk({
      loanSize: 500000,
      creditScore: 720,
      propertyType: 'Condo',
      occupancy: 'Primary'
    })(({ type }) => {
      if(type === RatesLoadedType) {
        expect(global.fetch).toHaveBeenCalledWith(
          `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?loanSize=500000&creditScore=720&propertyType=Condo&occupancy=Primary`,
          {
            method: 'GET',
            headers: new Headers({
              'Authorization': 'RG-AUTH 71d50f56-6377-4196-9823-6f61b512899c'
            })
          }
        );
        cb();
      }
    });
  });

});