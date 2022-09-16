$(document).ready(function () {
  $("#submit").click(function () {
    // var tn=$("#fname").val();
    if ($("#fname").val() == "" && $("#lname").val() == "") {
      $("#fname").css("background-color", "Red");
      $("#lname").css("background-color", "Red");
      alert("Blank field not allowed");
    } else if ($("#fname").val() == "") {
      $("#fname").css("background-color", "Red");
      alert("Blank field not allowed");
    } else if ($("#lname").val() == "") {
      $("#lname").css("background-color", "Red");
      alert("Blank field not allowed");
    }
  });
});
