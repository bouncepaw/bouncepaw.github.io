// I tried to make expressive code, do you like it?
let kek     = $("#kek")
let bg      = $("#bg")
let info    = $("#info")
let randInt = (max) => Math.floor(Math.random() * max)

bg.click(() => {
  kek.css({
    "color":       `rgb(${randInt(256)},${randInt(256)},${randInt(256)})`,
    "font-size":   `${randInt(79)}vh`,
    "font-family": () => {
      let dice = randInt(3)
      if      (dice == 0) return "sans-serif"
      else if (dice == 1) return "serif"
      else                return "monospace"
    }
  })

  info.css({
    "color": kek.css("color")
  })

  bg.css({
    "background-color": `rgb(${randInt(256)},${randInt(256)},${randInt(256)})`
  })

  if (kek.css("color") == bg.css("background-color")) {
    alert("У вас ниндзя-кек!\nШанс этого события: 1 к 368532802176")
    localStorage.setItem("ninjas", +localStorage.getItem("ninjas") + 1 || 1)

  } else if (kek.css("font-size") == "0px") {
    alert("У вас кек нулевой!\nШанс этого события: 1 к 79")
    localStorage.setItem("zeros", +localStorage.getItem("zeros") + 1 || 1)

  } else if (kek.css("color") == "rgba(255, 255, 0, 1)"
    // Opera displays color this way
    // I am not racist!
    && bg.css("background-color") == "rgba(0, 0, 256, 1)") {
    alert("У вас укрокек!\nШанс этого события: 1 к 368532802176")
    localStorage.setItem("ukros", +localStorage.getItem("ukros") + 1 || 1)
  }

  localStorage.setItem("clicks", +localStorage.getItem("clicks") + 1 || 1)
})

info.click(() => alert(`KekGen 2.4 by bouncepaw\n
Счётчик кликов: ${localStorage.getItem("clicks") || 0}
Счётчик нулевых кеков: ${localStorage.getItem("zeros") || 0}
Счётчик ниндзя-кеков: ${localStorage.getItem("ninjas") || 0}
Счётчик укрокеков: ${localStorage.getItem("ukros") || 0}`)
)
