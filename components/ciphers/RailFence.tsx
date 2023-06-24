export default function RailFence(text, key, method) {
  const matrix = Array.from(Array(Number(key)).keys()).map((): string[] => [])
  let moveDown = false
  let row = 0
  text.split("").map((_, index) => {
    if ([0, Number(key) - 1].includes(row)) moveDown = !moveDown
    matrix[row].push(text[index])
    row += [-1, 1][Number(moveDown)]
  })
  const result = "Work in progress"
  return method === "Encrypt" ? matrix.map(i => i.join("")).join("") : result
}
