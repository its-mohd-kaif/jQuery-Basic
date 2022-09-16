$(document).ready(function () {
  $("#img1").show();
  $("#img2").hide();
  $("#b2").click(function () {
    $("#img1").hide();
    $("#img2").show();
  });
  $("#b1").click(function () {
    $("#img1").show();
    $("#img2").hide();
  });
});
