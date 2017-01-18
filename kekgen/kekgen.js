function doKek() {
  $("#output").css("background-color", getRandomColor());
  $("#kek").css({
    "color": getRandomColor(),
    "font-size": getRandomSizePx(),
    "font-family": getRandomFont()
  });
};
function getCopy() {
  $("#copy-desc").removeClass("shame");
  $("#copy").removeClass("shame");
  $("#copy").text(getKekAsHtml());
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max); // return a random number from 0 to max - 1, have no idea how it works
};
function getRandomColor() {
  return "rgb(" + getRandomNumber(256) + "," + getRandomNumber(256) + "," + getRandomNumber(256) + ")"; // return a random color in rgb(a,b,c) format
};
function getRandomSizePx() {
  return getRandomNumber(251) + "px";
};
function getRandomFont() {
  r = getRandomNumber(2);
  switch (r) {
    case 0:
      return "'PT Sans', sans-serif";
    case 1:
      return "'PT Serif', serif";
  };
};

function getKekAsHtml() {
  return '<style>' + getCssOfOutput() + getCssOfKek() + '</style>' + '<div id="output"><span id="kek">КЕК</span></div>';
};
function getCssOfOutput() {
  var a = "#output{width:500px;height:300px;line-height:300px;border:1px black solid;border-radius:5px;display:inline-block;background-color:";
  var b = $("#output").css("background");
  return a + b + "}";
};
function getCssOfKek() {
  var a = "#kek{display:inline-block;vertical-align:middle;color:"
  var b = $("#kek").css("color");
  var c = $("#kek").css("font-size");
  var d = $("#kek").css("font-family");
  return a + b + ";font-size:" + c + ";font-family:" + d + ";}";
}
