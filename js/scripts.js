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


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangleType(a, b, c);

    $(".a").text(a);
    $(".b").text(b);
    $(".c").text(c);
    $(".result").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
