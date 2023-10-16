export class Matrix {
  matrix: string;

  constructor(matrix: string) {
    this.matrix = matrix;
  }
  
  get rows(): number[][] {

    return this.matrix
      .split('\n')      // splits matrix into an array of rows //  1 2 3  //  4 5 6  //  7 8 9  //
      .map(row => row.split(' ')      //  splits each row array into an array of numbers //  1 / 2 / 3  //  4 / 5 / 6 // 7 / 8 / 9  //  and maps in the place of previous entry
      .map(Number)      // maps a numbe rin place of each character
      );
  }

  /*
  get columns(): number[][] {
    const rows = this.rows;
    const columns = rows[0].map((_, i) => rows.map(row => row[i]));

    // rows[0] selects 1st row and determines the number of columns which is equal to row[0].length
    // .map((_, i) => ...) iterates over elements in 1st row whre i is row element index which corresponds to column
    // rows.map(row => row[i]) iterates over each row and extracts element at current colum index i  for each row, it extracts the element at the same column index i as determined by the outer map
  }
  */
  get columns(): number[][] {
    const rowLength = this.rows[0].length;
    const columnLength = this.rows.length;
    let columns = [];
    for (let i = 0; i < rowLength; i++) {
      let column = [];
      for (let j = 0; j < columnLength; j++) {
        column.push(this.rows[j][i]);
      }
      columns.push(column);
    }
    return columns;
  }

}
