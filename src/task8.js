$(document).ready(function () {
  $("#submit").click(function () {
    //These function do when user start typing in blank field the red color of textbox will be white
    $("#fname").keyup(function () {
      if ($("#fname").val() != "") {
        $("#fname").css("background-color", "white");
      }
    });
    $("#lname").keyup(function () {
      if ($("#lname").val() != "") {
        $("#lname").css("background-color", "white");
      }
    });
    $("#fname,#lname").keyup(function () {
      if ($("#lname").val() != "" && $("#fname").val() != "") {
        $("#fname").css("background-color", "white");
        $("#lname").css("background-color", "white");
      }
    });

    //These if condition check which field is empty and make foucs on them
    if ($("#fname").val() == "" && $("#lname").val() == "") {
      $("#fname").focus();
      $("#fname").css("background-color", "Red");
      $("#lname").css("background-color", "Red");
      alert("Blank field not allowed");
    } else if ($("#fname").val() == "") {
      $("#fname").focus();
      $("#fname").css("background-color", "Red");
      alert("Blank field not allowed");
    } else if ($("#lname").val() == "") {
      $("#lname").focus();
      $("#lname").css("background-color", "Red");
      alert("Blank field not allowed");
    }
  });
});
