import {randomCells} from './SudokuCellUtil'
import BiggerCell from "@/core/BiggerCell";

export function createCellsProxy(size) {
  const cells = randomCells(size, 0.2)
  const SIZE = size ** 2

  const getContainer = () => new Array(SIZE)
    .fill(null)
    .map(() => new BiggerCell(SIZE))

  const rows = getContainer(),
    cols = getContainer(),
    matrixs = getContainer();

  function matrixPositionOf(row, col) {
    row = Math.floor(row / size)
    col = Math.floor(col / size)
    return (row * size) + col
  }

  (function init(li) {
    let row = 0, col = 0

    for (const i of li) {
      if (col === SIZE) {
        col = 0
        row += 1
      }

      rows[row].add(i)
      cols[col].add(i)
      matrixs[matrixPositionOf(row, col)].add(i)

      col += 1
    }
  })(cells)

  return {
    cells,
    rows,
    cols,
    matrixs
  }
}
