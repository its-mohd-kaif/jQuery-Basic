$(document).ready(function () {
  $("#cbutton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#ctype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });
  $("#tbutton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#tstype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });
  $("#trbutton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#trtype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });

  $("#ebutton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#etype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });
  $("#mbutton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#mtype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });
  $("#tabButton").click(function () {
    var data = prompt("Enter the item");
    if (data != "") {
      $("#ttype").append(
        "<li><a href='#'>" + data + "</a><button>+</button></li>"
      );
    } else {
      alert("Empty field not be added!!");
    }
  });
});
