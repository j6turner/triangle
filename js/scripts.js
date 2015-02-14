var triangleType = function(length) {
  var triangle = "";
  var a = 0,
      b = 0,
      c = 0;
  var result = "";

  if ((length[a] >= (length[b] + length[c]))
      || (length[b] >= (length[c] + length[a]))
      || (length[c] >= (length[a] + length[b]))) {
    triangle = "No luck ... that is not a triangle.";
  } else if ((length[a] === length[b]) && (length[b] === length[c])) {
      triangle = "equilateral";
    } else if (((length[a] === length[b]) && (length[a] !== length[c]))
        || ((length[b] === length[c]) && (length[b] !== length[a]))
        || ((length[c] === length[a]) && (length[c] !== length[b]))) {
      triangle = "isosceles";
    } else {
      triangle = "scalene";
    };


  result = triangle
  return result;

};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var result = triangle;


    $(".triangle").text(triangle);

    $("#result").show();
    event.preventDefault();
  });
});
