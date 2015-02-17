var triangle = {
  a: 0,
  b: 0,
  c: 0,
  scalene: "",
  equilateral: "",
  isosceles: "",

   type: function() {
     var a = this.a;
     var b = this.b;
     var c = this.c;
    var notTriangle = (a >= (b + c)
                        || b >= (c + a)
                          || c >= (a + b)
                            || isNaN(a)
                              || isNaN(b)
                                || isNaN(c));

    if (notTriangle) {
      result = null;
    } else if (a === b && b === c) {
        this.equilateral = "" + a + ", " + b + ", " + c;
    } else if ((a === b && c < (a + b))
          || (b === c && a < (b + c))
          || (c === a && b < (a + b))) {
        this.isosceles = "" + a + ", " + b + ", " + c;
    } else {
        this.scalene = "" + a + ", " + b + ", " + c;
    };


  }
}


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    triangle.a = parseInt($("input#a").val());
    triangle.b = parseInt($("input#b").val());
    triangle.c = parseInt($("input#c").val());
    var result = triangle.type();

    if (result === null) {
      alert("No luck ... that is not a triangle.")
    } else {
      $(".equilateral").text(triangle.equilateral);
      $(".isosceles").text(triangle.isosceles);
      $(".scalene").text(triangle.scalene);
    }

    $("#equilateral").show();
    $("#isosceles").show();
    $("#scalene").show();

    event.preventDefault();
  });
});
