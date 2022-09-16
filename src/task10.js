$(document).ready(function () {
  $("#size").click(function () {
    if ($("#size").val() == "s") {
      $("#price1").text(1500);
    }else if ($("#size").val() == "l") {
        $("#price1").text(2000);
      }else if ($("#size").val() == "xl") {
        $("#price1").text(2500);
      }
  });
  $("#color").click(function () {
    if ($("#color").val() == "wh") {
      $("#price2").text(1999);
    }else if ($("#color").val() == "bl") {
        $("#price2").text(2999);
      }else if ($("#color").val() == "lg") {
        $("#price2").text(3999);
      }
  });
  $("table tr:odd").css("background-color", "LightGrey");
});
