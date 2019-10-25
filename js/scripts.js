// Business logic:



// user interface logic:

$(document).ready(function() {
  $("form#survey").submit(function(event) {
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
  // console.log("The amount of Blue is: ",amountOfBlue);

  // HIDE ALL LANGUAGE SUGGESTIONS ON SUBMIT (TO RESET)
  $(".language1, .language2, .language3, .language4, .language5").hide();



  // BRANCHING
  if (suggestionNumber <= 50) {
    $(".language1").show();
  }
  else if (suggestionNumber <=100) {
    $(".language2").show();
  }
  else if (suggestionNumber <=150) {
    $(".language3").show();
  }
  else if (suggestionNumber <=200) {
    $(".language4").show();
  }
  else {
    $(".language5").show();
  }

  $(".dataSet").slideDown();





  // NOTES ON var inputAmountOfBlue:
  // takes the 5th character of a hex code (first blue#) and charCodeAt to provide a specific 'character number' (0-9 & a-f) -47 (to normalize), then dividing possible (16) results into four ranges for branching as follows:
  // A: 1, 2, 3, 4
  // B: 5, 6, 7, 8
  // C: 9, 10, 50, 51
  // D: 52, 53, 54, 55

  // NOTES ON var inputTime & inputStyle:
  // range of 4, between 14 and 56.




  event.preventDefault();
});
});
