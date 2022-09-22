$(document).ready(function () { //jQery Ready Function
  $("#confirmPassword,#password").keyup(checkPassword);
});

function checkPassword() {//All Validation of ckecking password
  var password = $("#password").val();
  var confirmPassword = $("#confirmPassword").val();

  if (password == "" && confirmPassword == "") $("#output").html("");
  else if (password != "" && confirmPassword == "") $("#output").html("");
  else if (password == "" && confirmPassword != "") $("#output").html("");
  else if (password != confirmPassword)
    $("#output").html("Passwords do not match!").css("color", "red");
  else if (
    password != "" &&
    confirmPassword != "" &&
    password == confirmPassword
  )
    $("#output").html("Passwords match.").css("color", "green");
}
