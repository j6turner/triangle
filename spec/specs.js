describe('triangleType', function() {

  it('returns "No luck ... that is not a triangle."', function() {
    expect(triangleType(1, 1, 10)).to.equal("No luck ... that is not a triangle.")
  });

  it('returns "equilateral" if all lengths are equal', function() {
    expect(triangleType(1, 1, 1)).to.equal("equilateral");
  });

  it('returns "isosceles" if only two lengths are equal', function() {
    expect(triangleType(5, 5, 2)).to.equal("isosceles");
  });

});
