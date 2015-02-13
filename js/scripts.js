var triangleType = function(length) {
  var triangle = "";
  var a = 0,
      b = 0,
      c = 0;
  var result = "";

  if ((length[a] === length[b]) && (length[b] === length[c])) {
    triangle = "equilateral";
  }

  result = triangle
  return result;

};
