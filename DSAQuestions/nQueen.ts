function isValidPosition(matrix: number[][], rowIndex: number, columnIndex: number): boolean {
  const length = matrix.length;

  // check row
  for (let index = 0; index < length; index++) {
    if (matrix[rowIndex][index]) {
      return false;
    }
  }

  // check column
  for (let index = 0; index < length; index++) {
    if (matrix[index][columnIndex]) {
      return false;
    }
  }

  // check diagonal
  // top left
  let row = rowIndex - 1;
  let column = columnIndex - 1;

  while (row >= 0 && column >= 0) {
    if (matrix[row][column]) {
      return false;
    }
    row--;
    column--;
  }

  // bottom left
  row = rowIndex - 1;
  column = columnIndex + 1;

  while (row >= 0 && column < length) {
    if (matrix[row][column]) {
      return false;
    }
    row--;
    column++;
  }

  // bottom right
  row = rowIndex + 1;
  column = columnIndex + 1;

  while (row < length && column < length) {
    // console.log(`row: ${row}, column: ${column}, matrix[row][column]: ${matrix[row][column]}`)
    if (matrix[row][column]) {
      return false;
    }
    row++;
    column++;
  }

  // top right
  row = rowIndex + 1;
  column = columnIndex - 1;

  while (row < length && column >= 0) {
    if (matrix[row][column]) {
      return false;
    }
    row++;
    column--;
  }

  return true;
}

function nQueen(matrix: number[][]): number[][] {
  const totalQueens = matrix.length;
  let currentQueen = 1;
  let rowIndex = 0;
  let columnIndex = 0;

  while (currentQueen <= totalQueens) {
    if (isValidPosition(matrix, rowIndex, columnIndex)) {
      matrix[rowIndex][columnIndex] = currentQueen;
      rowIndex++;
      currentQueen++;
    } else {
      for (let i = columnIndex; i < totalQueens; i++) {
        if (isValidPosition(matrix, rowIndex, columnIndex)) {

        }
      }
    }
  }

  return matrix;
}

function main() {
  const length = 4;
  const matrix: number[][] = Array.from(Array(length), () => Array(length))
  const result: number[][] = nQueen(matrix);
  console.log(result);
}

main();