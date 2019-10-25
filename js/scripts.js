// Business logic:




// user interface logic:

$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var inputName = $("#userName").val();
    var inputEnd = $("input:radio[name=userEnd]:checked").val();
    var inputTime = parseInt($("#userTime").val());
    var inputStyle = parseInt($("#userStyle").val());
    var inputColor = $("#userColor").val();

    // START JAVASCRIPT LISTENER TEST
    $(".inputName").text(inputName);
    $(".inputEnd").text(inputEnd);
    $(".inputTime").text(inputTime);
    $(".inputStyle").text(inputStyle);
    $(".inputColor").text(inputColor);
    // START JAVASCRIPT LISTENER TEST

    event.preventDefault();
  });
});
