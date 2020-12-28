export default class BiggerCell {
  constructor(size) {
    this.size = size
    this.cells = []
    this.cellSet = new Set()
  }

  add(cell) {
    this.cells.push(cell)
    this.cellSet.add(cell)
  }
}
