describe('triangleType', function() {

  it('returns "equilateral" if all lengths are equal', function() {
    expect(triangleType("[1], [1], [1]")).to.eql("equilateral");
  });

});
