describe('triangleType', function() {

  it('identifies an equilateral triangle', function() {
    expect(triangleType("equilateral")).to.eql([1, 1, 1]);
  });

});
