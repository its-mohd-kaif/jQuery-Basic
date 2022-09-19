$(document).ready(function () {
  $("#add").click(function () {
    var li = $("#input").append(
      '<li id="item"><input type="text" placeholder="Enetr Class"><input type="text" placeholder="Enetr Board"> <input type="text" placeholder="Enetr Marks">  <input type="text" placeholder="Enetr Division">  <button id="add">+</button>  <button id="del">-</button></li>'
    );
  });
  $("#remove").click(function () {
    $("#item").remove();
  });
});
