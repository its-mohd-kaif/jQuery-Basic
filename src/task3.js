//Document Ready Function
$(document).ready(function () {
  $(".container").click((eve) => {
    //Make li variable that hold the List
    let li =
      "<div><input type='text' placeholder='Enter Class'> <input type='text' placeholder='Enter Board'> <input type='text' placeholder='Enter Marks'> <input type='text' placeholder='Enter Division'> <button class='add'>+</button> <button class='del'>-</button></div>";
    //When class value equal to the event target value then append the value li
    if (eve.target.className == "add") {
      $(eve.target.parentNode).after(li);
    }
    //Remove list when class value equal to the event target value
    if (eve.target.className == "del") {
      $(eve.target.parentElement).remove();
    }
  });
});
