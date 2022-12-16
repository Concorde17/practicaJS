function distributeGifts(packOfGifts, reindeers) {
  let limit = 0;
  let carry = 0;
  packOfGifts.forEach(gift => {
    limit += gift.length
  });
  reindeers.forEach(r => {
    carry += (2 * r.length)
  });
  return Math.floor(carry / limit)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers))