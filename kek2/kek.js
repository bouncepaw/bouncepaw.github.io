var kek = $("#kek")
var bg = $("#bg")

bg.on("click", function() {
  console.log("horosho")

  let kekColor = getRandomColor()
  let kekSize = getRandomSizePx()
  kek.css({
    "color": kekColor,
    "font-size": kekSize + "px",
    "font-family": getRandomFont()
  })

  let bgColor =  getRandomColor()
  bg.css({
    "background-color": bgColor
  })

  if (kekColor == bgColor) alert("У вас цвета совпали!")
  if (kekSize == 0) alert("У вас кек нулевой!")
})

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function getRandomColor() {
  return `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`
}

function getRandomSizePx() {
  return getRandomNumber(600)
}
function getRandomFont() {
  let dice = getRandomNumber(3)
  if (dice == 0) {
    return "'PT Sans', sans-serif"
  } else if (dice == 1){
    return "'PT Serif', serif"
  } else {
    return "'Ubuntu', sans-serif"
  }
}
