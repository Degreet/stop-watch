const ctx = canv.getContext("2d")
let time = 500000
let lastTime

function tick(timestamp) {
  time -= timestamp - (lastTime || timestamp)
  lastTime = timestamp

  clear()
  drawSector(time, 500000)
  requestAnimationFrame(tick)
}

function clear() {
  ctx.clearRect(0, 0, canv.width, canv.height)
}

function drawSector(time, max) {
  const angle = Math.PI * 2 * time / max + Math.PI * 1.5
  ctx.beginPath()
  ctx.moveTo(250, 250)
  ctx.arc(250, 250, 200, angle, Math.PI * -.5)
  ctx.fill()
}

requestAnimationFrame(tick)