
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 1000,
    years: 5,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('18.87')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 1000,
    years: 5,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('18.87')
});

/// etc
