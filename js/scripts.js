var triangleType = function() {
  var triangle = "";
  var result = "";



  if (a >= (b + c)
      || b >= (c + a)
      || c >= (a + b)
      || isNaN(a)
      || isNaN(b)
      || isNaN(c)) {
    triangle = null;
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

    if (result === null) {
      alert("No luck ... that is not a triangle.")
    } else {
      $(".a").text(a);
      $(".b").text(b);
      $(".c").text(c);
      $(".equilateral").text(result);
      $(".isosceles").text(result);
      $(".scalene").text(result);
    }

    $("#equilateral").show();
    $("#isosceles").show();
    $("#scalene").show();

    event.preventDefault();
  });
});
