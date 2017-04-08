let kek = $("#kek")
let bg = $("#bg")
let info = $("#info")

bg.on("click", () => {
  let kekSize = getRandomSize() + "vh"
  kek.css({
    "color": getRandomColor(),
    "font-size": kekSize,
    "line-height": kekSize,
    "font-family": getRandomFont()
  })

  info.css({
    "color": kek.css("color")
  })

  bg.css({
    "background-color": getRandomColor()
  })

  if (kek.css("background-color") == bg.css("background-color")) {
    alert(`У вас цвета совпали!
    Шанс этого события: 1 к 368532802176`)
    let ninjas = +localStorage.getItem("ninjas") + 1 || 1
    localStorage.setItem("ninjas", ninjas)
  }

  if (kek.css("font-size") == "0px") {
    alert(`У вас кек нулевой!
    Шанс этого события: 1 к 79`)
    let zeros = +localStorage.getItem("zeros") + 1 || 1
    localStorage.setItem("zeros", zeros)
  }

  let clicks = +localStorage.getItem("clicks") + 1 || 1
  localStorage.setItem("clicks", clicks)
})

info.on("click", () => {
  alert(`
    KekGen 2.1 by bouncepaw

    Счётчик кликов: ${localStorage.getItem("clicks") || 0}
    Счётчик нулевых кеков: ${localStorage.getItem("zeros") || 0}
    Счётчик ниндзя-кеков: ${localStorage.getItem("ninjas") || 0}
  `)
})
