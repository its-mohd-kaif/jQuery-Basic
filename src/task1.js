$(document).ready(function () {
  // array of items.
  var items = [
    "Allium",
    "Alyssum",
    "Balloon Flower",
    "Bee Balm",
    "Bellflower",
    "Camellia",
    "Cannabis",
    "China Rose",
    "Coneflower",
    "Gas Plant",
    "Golden Champa",
    "Jasmine",
    "Lady of the Night",
    "Lamium",
    "Lavender",
    "Lily",
    "Lotus",
    "Moon Flower",
    "Oleander",
    "Rose",
    "Saffron",
  ];
  // jQuery inbuild function
  $("#auto").autocomplete({
    source: items, // list of items.
  });
});
