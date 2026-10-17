// Procedural dark-industrial killzone mat on a canvas: plated steel floor, seams every 6 inches, rivets,
// grime, scorch marks and a 1" grid. 60 px per inch (30 px in low-graphics mode). Browser only.
import { CanvasTexture, SRGBColorSpace } from 'three'

function rng(seed: number): () => number {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0x100000000
  }
}

export function makeMatCanvas(widthIn: number, heightIn: number, pxPerInch: number): HTMLCanvasElement {
  const W = Math.round(widthIn * pxPerInch)
  const H = Math.round(heightIn * pxPerInch)
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const g = c.getContext('2d')!
  const rand = rng(40)
  // base plate colour with a soft vignette
  g.fillStyle = '#22262c'
  g.fillRect(0, 0, W, H)
  const grad = g.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, W * 0.62)
  grad.addColorStop(0, 'rgba(70,76,86,0.28)')
  grad.addColorStop(1, 'rgba(0,0,0,0.38)')
  g.fillStyle = grad
  g.fillRect(0, 0, W, H)
  // plates: 6" squares with slightly different tints
  const plate = 6 * pxPerInch
  for (let y = 0; y < H; y += plate) {
    for (let x = 0; x < W; x += plate) {
      const t = rand()
      g.fillStyle = `rgba(${t < 0.5 ? '255,255,255' : '0,0,0'},${0.02 + rand() * 0.05})`
      g.fillRect(x, y, plate, plate)
    }
  }
  // speckle noise
  const specks = Math.round((W * H) / (pxPerInch > 40 ? 90 : 60))
  for (let i = 0; i < specks; i++) {
    g.fillStyle = `rgba(${rand() < 0.5 ? '255,255,255' : '0,0,0'},${rand() * 0.12})`
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 2, 1 + rand() * 2)
  }
  // grime and scorch blotches
  for (let i = 0; i < 26; i++) {
    const x = rand() * W
    const y = rand() * H
    const r = (0.8 + rand() * 2.6) * pxPerInch
    const b = g.createRadialGradient(x, y, 0, x, y, r)
    b.addColorStop(0, `rgba(0,0,0,${0.16 + rand() * 0.14})`)
    b.addColorStop(1, 'rgba(0,0,0,0)')
    g.fillStyle = b
    g.fillRect(x - r, y - r, r * 2, r * 2)
  }
  // seams and rivets
  g.lineWidth = Math.max(1, pxPerInch * 0.07)
  g.strokeStyle = 'rgba(0,0,0,0.65)'
  for (let x = 0; x <= W; x += plate) {
    g.beginPath()
    g.moveTo(x, 0)
    g.lineTo(x, H)
    g.stroke()
  }
  for (let y = 0; y <= H; y += plate) {
    g.beginPath()
    g.moveTo(0, y)
    g.lineTo(W, y)
    g.stroke()
  }
  g.fillStyle = 'rgba(120,128,140,0.5)'
  for (let y = 0; y < H; y += plate) {
    for (let x = 0; x < W; x += plate) {
      for (const [dx, dy] of [[0.4, 0.4], [5.6, 0.4], [0.4, 5.6], [5.6, 5.6]] as const) {
        g.beginPath()
        g.arc(x + dx * pxPerInch, y + dy * pxPerInch, pxPerInch * 0.09, 0, Math.PI * 2)
        g.fill()
      }
    }
  }
  // hazard stripes along the long edges
  const stripe = pxPerInch * 0.5
  g.save()
  g.beginPath()
  g.rect(0, 0, W, stripe)
  g.rect(0, H - stripe, W, stripe)
  g.clip()
  for (let x = -H; x < W + H; x += stripe * 2) {
    g.fillStyle = 'rgba(214,170,40,0.55)'
    g.beginPath()
    g.moveTo(x, 0)
    g.lineTo(x + stripe, 0)
    g.lineTo(x + stripe - H, H)
    g.lineTo(x - H, H)
    g.closePath()
    g.fill()
  }
  g.restore()
  // 1" grid, stronger every 6"
  for (let i = 0; i <= widthIn; i++) {
    g.strokeStyle = i % 6 === 0 ? 'rgba(160,185,210,0.34)' : 'rgba(160,185,210,0.14)'
    g.lineWidth = i % 6 === 0 ? 2 : 1
    g.beginPath()
    g.moveTo(i * pxPerInch, 0)
    g.lineTo(i * pxPerInch, H)
    g.stroke()
  }
  for (let j = 0; j <= heightIn; j++) {
    g.strokeStyle = j % 6 === 0 || j === heightIn / 2 ? 'rgba(160,185,210,0.34)' : 'rgba(160,185,210,0.14)'
    g.lineWidth = j % 6 === 0 ? 2 : 1
    g.beginPath()
    g.moveTo(0, j * pxPerInch)
    g.lineTo(W, j * pxPerInch)
    g.stroke()
  }
  return c
}

export function makeMatTexture(widthIn: number, heightIn: number, low: boolean): CanvasTexture {
  const tex = new CanvasTexture(makeMatCanvas(widthIn, heightIn, low ? 30 : 60))
  tex.colorSpace = SRGBColorSpace
  tex.anisotropy = low ? 1 : 8
  tex.needsUpdate = true
  return tex
}
