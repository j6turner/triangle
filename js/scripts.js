var triangleType = function(a, b, c) {
  var triangle = "";
  var result = "";

  if (a >= (b + c)
      || b >= (c + a)
      || c >= (a + b)) {
    triangle = "No luck ... that is not a triangle.";
  } else if (a === b && b === c) {
      triangle = "equilateral";
  } else if ((a === b && c < (a + b))
        || (b === c && a < (b + c))
        || (c === a && b < (a + b))) {
      triangle = "isosceles";
  } else {
      triangle = "scalene";
  };


  result = triangle
  return result;

};
