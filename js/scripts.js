var triangleType = function(a, b, c) {
  var triangle = "";
  var result = "";

  if (a >= (b + c)
      || b >= (c + a)
      || c >= (a + b)) {
    triangle = "No luck ... that is not a triangle.";
  } else if (a === b && b === c) {
      triangle = "equilateral";

  };


  result = triangle
  return result;

};
