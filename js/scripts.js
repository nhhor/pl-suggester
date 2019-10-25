// Business logic:



// user interface logic:

$(document).ready(function() {
  $("form#survey").submit(function(event) {

// MOVE COL's OVER ANIMATION:
    $(".results").fadeOut(750);
    $(".dataSet").slideUp(500);
    $("#moveOver").removeClass("col-md-12").slideUp(500);
    $("#moveOver").addClass("col-md-7").slideDown(500);


    // VARIABLES
    var inputName = $("#userName").val();

    var inputEnd = $("input:radio[name=userEnd]:checked").val();
    var inputEndNumber;

    if (inputEnd === "userEndFront"){
      inputEndNumber = 1;
    }
    else {
      inputEndNumber = 117;
    }

  var inputTime = parseInt($("#userTime").val()) * 18 + 1; //14-56
  var inputStyle = parseInt($("#userStyle").val()) * 18 + 1; //14-56

  var inputColor = $("#userColor").val();
  var amountOfBlue = inputColor.charCodeAt(5) - 47; //1-55

  var suggestionNumber = ((inputTime + inputStyle + amountOfBlue) / 2 + inputEndNumber).toFixed(0);
  console.log(suggestionNumber)

  // JAVASCRIPT LISTENER TEST
  $(".inputName").text(inputName);
  $(".inputEnd").text(inputEnd);
  $(".inputTime").text(inputTime);
  $(".inputStyle").text(inputStyle);
  $(".inputColor").text(inputColor);
  $(".amountOfBlue").text(amountOfBlue);
  $(".suggestionNumber").text(suggestionNumber);

  // HIDE ALL LANGUAGE SUGGESTIONS ON SUBMIT (TO RESET)
  $(".language1, .language2, .language3, .language4, .language5").hide();


  // BRANCHING
  if (suggestionNumber <= 50) {
    $(".language1").show();
  }
  else if (suggestionNumber <=100) {
    $(".language2").show();
  }
  else if (suggestionNumber <=161) {
    $(".language3").show();
  }
  else if (suggestionNumber <=200) {
    $(".language4").show();
  }
  else {
    $(".language5").show();
  }

  $(".results").fadeIn(750);

  $(".dataSet").slideDown(1500);




  event.preventDefault();
});
});
