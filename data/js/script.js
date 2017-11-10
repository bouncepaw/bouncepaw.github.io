// red is player 1 is x
// blue is player 2 is o
var curPlayer = 1;
function colorRed() {
  $("#board button").css("borderColor","red");
  $("#output").css("borderColor", "red");
};
function colorBlue() {
  $("#board button").css("borderColor","blue");
  $("#output").css("borderColor", "blue");
};
function checkForWin() {
  b = new Array(); // board as array
  b[0] = $("#b-1 button").html(); // first cell added
  b[1] = $("#b-2 button").html(); // board indexes
  b[2] = $("#b-3 button").html(); // 0 1 2
  b[3] = $("#b-4 button").html(); // 3 4 5
  b[4] = $("#b-5 button").html(); // 6 7 8
  b[5] = $("#b-6 button").html();
  b[6] = $("#b-7 button").html();
  b[7] = $("#b-8 button").html();
  b[8] = $("#b-9 button").html();
  if ((b[0] == b[1] && b[1] == b[2]) && b[0] != "&nbsp;") { // line 1
    if (b[0] == '<b class="red">X</b>') {
      return ["#b-1", "#b-2", "#b-3", "x"];
    } else {
      return ["#b-1", "#b-2", "#b-3", ")"];
    };
  } else if ((b[3] == b[4] && b[4] == b[5]) && b[3] != "&nbsp;") {
    if (b[3] == '<b class="red">X</b>') {
      return ["#b-4", "#b-5", "#b-6", "x"];
    } else {
      return ["#b-4", "#b-5", "#b-6", "o"];
    };
  } else if ((b[6] == b[7] && b[7] == b[8]) && b[6] != "&nbsp;") {
    if (b[6] == '<b class="red">X</b>') {
      return ["#b-6", "#b-7", "#b-8", "x"];
    } else {
      return ["#b-6", "#b-7", "#b-8", "o"];
    };
  } else if ((b[0] == b[3] && b[3] == b[6]) && b[0] != "&nbsp;") { // column 1
    if (b[0] == '<b class="red">X</b>') {
      return ["#b-1", "#b-4", "#b-7", "x"];
    } else {
      return ["#b-1", "#b-4", "#b-7", "o"];
    };
  } else if ((b[1] == b[4] && b[4] == b[7]) && b[1] != "&nbsp;") {
    if (b[1] == '<b class="red">X</b>') {
      return ["#b-2", "#b-5", "#b-8", "x"];
    } else {
      return ["#b-2", "#b-5", "#b-8", "o"];
    };
  } else if ((b[2] == b[5] && b[5] == b[8]) && b[2] != "&nbsp;") {
    if (b[2] == '<b class="red">X</b>') {
      return ["#b-3", "#b-6", "#b-9", "x"];
    } else {
      return ["#b-3", "#b-6", "#b-9", "o"];
    };
  } else if ((b[0] == b[4] && b[4] == b[8]) && b[0] != "&nbsp;") { // diagonal 1
    if (b[0] == '<b class="red">X</b>') {
      return ["#b-1", "#b-5", "#b-9", "x"];
    } else {
      return ["#b-1", "#b-5", "#b-9", "o"];
    };
  } else if ((b[2] == b[4] && b[4] == b[6]) && b[2] != "&nbsp;") {
    if (b[2] == '<b class="red">X</b>') {
      return ["#b-3", "#b-5", "#b-7", "x"];
    } else {
      return ["#b-3", "#b-5", "#b-7", "o"];
    };
  } else {
    return ["nope"];
  };
};
var winnerExistence = false;
function findTheWinner() {
  var c = checkForWin(); // get returned data in c
  if (c[0] != "nope") { // has anyone won?
    winnerExistence = true;
    if (c[3] == "x") {
      $(c[0] + " b").css("color", "black");
      $(c[1] + " b").css("color", "black");
      $(c[2] + " b").css("color", "black");
      $("#output").html("Победил крестик! Сыграть заново?<a href='https://bouncepaw.github.io/xo'>да</a><img src='https://bouncepaw.github.io/data/img/trophy.png'>");
    } else {
      $(c[0] + " b").css("color", "black");
      $(c[1] + " b").css("color", "black");
      $(c[2] + " b").css("color", "black");
      $("#output").html("Победил нолик! Сыграть заново?<a href='https://bouncepaw.github.io/xo'>да</a><img src='https://bouncepaw.github.io/data/img/trophy.png'>");
    };
  };
};
function setMark(pos) {
  var b = pos + " button";
  if (winnerExistence) { return }; // prevent new marks if someone has already won
  if ($(b).html() == "&nbsp;") { // if this cell is empty
    if (curPlayer == 1) { // if x is playing
      $(b).html('<b class="red">X</b>');
      colorBlue();
      curPlayer = 2;
    } else { // if o is playing
      $(b).html('<b class="blue">O</b>');
      colorRed();
      curPlayer = 1;
    };
  } else { // if this cell isn't empty
    $("#output").text("Эта клетка занята. Выбери другую.");
  };
  findTheWinner();
  if (winnerExistence == false) {
    checkDraw();
  };
};
function checkDraw() {
  b = new Array(); // board as array
  b[0] = $("#b-1 button").html(); // first cell added
  b[1] = $("#b-2 button").html(); // board indexes
  b[2] = $("#b-3 button").html(); // 0 1 2
  b[3] = $("#b-4 button").html(); // 3 4 5
  b[4] = $("#b-5 button").html(); // 6 7 8
  b[5] = $("#b-6 button").html();
  b[6] = $("#b-7 button").html();
  b[7] = $("#b-8 button").html();
  b[8] = $("#b-9 button").html();
  if (b.every(elem => elem != "&nbsp;")) {
    $("#output").html("Ничья! Сыграть заново?<a href='https://bouncepaw.github.io/xo'>да</a>");
  };
};
