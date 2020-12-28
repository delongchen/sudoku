function Cell(v) {
  this.v = v
}
/**
 *
 * @param {number} size
 * @param {Function} controller
 */
function createCells(size, controller) {
  return new Array(size).fill(null).map(controller)
}

function zeroCells(size) {
  return createCells(size, () => new Cell(0))
}

function randomCells(size, emptySeed) {
  const {random, round} = Math
  const empty = () => (random() - emptySeed) < 0

  return createCells(size, () => {
    return new Cell(empty() ? 0 : round(random() * 8) + 1)
  })
}

export {
  zeroCells,
  randomCells
}
