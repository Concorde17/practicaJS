function wrapping(gifts) {
  let l = "\n*"
  let r = "*\n"
  return gifts.map((g) => "*".repeat(g.length + 2).concat(l, g, r, "*".repeat(g.length + 2)))
}

arr = ["hola", "mundo"]

wrapped = wrapping(arr)

console.log(wrapped)
console.log("s" * 3)