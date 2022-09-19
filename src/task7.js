$(document).ready(function () {
    $("#confirmPassword").keyup(checkPassword);
 });

function checkPassword() {
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    if (password != confirmPassword)
        $("#output").html("Passwords do not match!").css("color", "red");
    else
        $("#output").html("Passwords match.").css("color", "green");
}