var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

view.displayHit("A0");
view.displayMiss("B3");
view.displayHit("C5");
view.displayMiss("D6");

view.displayMessage("Tap tap, is this thing on?");
