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
      alert("Not a triangle");
    } else if (a === b && b === c) {
        this.equilateral = "<li>" + a + ", " + b + ", " + c + "</li>";
    } else if ((a === b && c < (a + b))
          || (b === c && a < (b + c))
          || (c === a && b < (a + b))) {
        this.isosceles = "<li>" + a + ", " + b + ", " + c + "</li>";
    } else {
        this.scalene = "<li>" + a + ", " + b + ", " + c + "</li>";
    };


  }
}


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    triangle.a = parseInt($("input#a").val());
    triangle.b = parseInt($("input#b").val());
    triangle.c = parseInt($("input#c").val());
    var result = triangle.type();

    if ((!isNaN(triangle.a)) && (!isNaN(triangle.b)) && (!isNaN(triangle.c))) {
      $(".equilateral").append(triangle.equilateral);
      $(".isosceles").append(triangle.isosceles);
      $(".scalene").append(triangle.scalene);
    }


    $("#a").val("");
    $("#b").val("");
    $("#c").val("");

    $("#equilateral").show();
    $("#isosceles").show();
    $("#scalene").show();

    event.preventDefault();
  });
});
