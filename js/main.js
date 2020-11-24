const ctx = canv.getContext("2d")
const r = canv.width / 2
const max = 5000
let time = max, timer, lastTime

function tick(timestamp) {
  time -= timestamp - (lastTime || timestamp)
  lastTime = timestamp

  clear()
  drawSector(time, max)
  timer = requestAnimationFrame(tick)
}

function clear() {
  ctx.clearRect(0, 0, canv.width, canv.height)
}

function drawSector(time, max) {
  const angle = Math.PI * 1.5 + Math.PI * 2 * time / max
  ctx.beginPath()
  ctx.moveTo(r, r)
  ctx.arc(r, r, r, angle, Math.PI * -.5)
  ctx.fill()
}

onclick = () => {
  const result = Math.ceil(Math.floor(max - time) / 1000)
  cancelAnimationFrame(timer)
  lastTime = undefined
  time = 0
  alert(result + " секунд")
  requestAnimationFrame(tick)
}

requestAnimationFrame(tick)