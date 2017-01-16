function doKek() {
  $("#output").css("background", getRandomColor());
  $("#kek").css({
    "color": getRandomColor(),
    "font-size": getRandomSizePx(),
    "font-family": getRandomFont()
  })
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
