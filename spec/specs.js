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

  it('returns "scalene" if no lengths are equal but no one length is greater than the other two combined', function() {
    expect(triangleType(2, 3, 4)).to.equal("scalene");
  });

});
