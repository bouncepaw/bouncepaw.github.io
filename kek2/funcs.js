function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function getRandomColor() {
  return `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`
}

function getRandomSize() {
  return getRandomNumber(79)
}

function getRandomFont() {
  let dice = getRandomNumber(3)
  if (dice == 0) {
    return "'PT Sans', sans-serif"
  } else if (dice == 1){
    return "'PT Serif', serif"
  } else {
    return "'Inconsolata', monospace"
  }
}
