
var pigLatin = function(leap) {
  if (leap === "a" || "e" || "i" || "o" || "u") {
    $("leap").append("ay");
    return true;
  }
  else if (leap !== (/[a-z]/)) {
    return false;
  }
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#leap").val();
    var result =  pigLatin(input);
    $(".result").text(result);
    console.log(result);
  });
});
