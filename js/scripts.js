function split(leap) {
  var result = [];
  var splitString = leap.split(" ");
  splitString.forEach(function(string){
    var vowel = string.match(/[aeiou]/);
    var firstPosition = string.indexOf(vowel);
    console.log(splitString);
    console.log(vowel);
    console.log(firstPosition);
    console.log(string);
    if (firstPosition > 0) {
      result += (string.slice(firstPosition) + string.slice(0, firstPosition) + "ay ");
      }
    else {
      result += string + "yay ";
    }
  });
  return result;
}




$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var leap = $("input#leap").val();
    var result =  split(leap);
    // console.log(leap);
    $("#result").show();
    $(".result").text(result);
  });
});
