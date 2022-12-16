function fitsInOneBox(boxes) {
  let sorted = boxes.sort((b1, b2) => (b1.l > b2.l) ? 1 : (b1.l < b2.l) ? -1 : 0)
  for (let i = 0; i < sorted.length - 1; i += 1) {
    if (sorted[i].w >= sorted[i + 1].w || sorted[i].h >= sorted[i + 1].h) {
      return false
    }
  }
  return true
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

console.log(fitsInOneBox(boxes))