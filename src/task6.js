$(document).ready(function () {
    $("#odd").click(function () {
      $("table tr:odd").css({
        "background-color": "LightGray",
      });
    });
    $("#even").click(function () {
      $("table tr:even").css({
        "background-color": "DodgerBlue ",
      });
    });
  });