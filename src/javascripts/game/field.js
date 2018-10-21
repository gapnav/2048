import CellNumber from './cell_number'
import Movement from './movement'

export default function() {
  const WIDTH = 4
  const HEIGHT = 4
  const SIZE = WIDTH * HEIGHT;
  const INITIAL_CELLS_FILLED = 2

  this.points = 0;

  this.move = (direction) => {
    let movement = new Movement(this, direction);
    movement.move();
    if (movement.moves) addCellNumber();
    this.points += movement.points;
  }

  this.width = () => {
    return WIDTH;
  }

  this.height = () => {
    return HEIGHT;
  }

  let initField = () => {
    this.field = [];

    for(let y = HEIGHT; y ; y--){
      let col = [];
      for(let x = WIDTH; x ; x--){
        col.push(null);
      }
      this.field.push(col);
    }

    for(let i = INITIAL_CELLS_FILLED; i; i--) addCellNumber();
  }

  let addCellNumber = () => {
    let empty_cells = emptyCellsIndexes();
    if (!empty_cells.length) return null;
    let i = Math.floor(Math.random() * empty_cells.length);
    let cell_number = new CellNumber();
    setByIndex(empty_cells[i], cell_number);
    return i;
  }

  let emptyCellsIndexes = () => {
    let result = [];
    for(let i = SIZE - 1; i > -1; i--){
      if (!getByIndex(i)) result.push(i);
    }
    return result;
  }

  let iToXY = (i) => {
    let x = Math.floor(i / WIDTH);
    let y = i % WIDTH;
    return [x, y];
  }

  let getByIndex = (i) => {
    let [x, y] = iToXY(i);
    return this.field[y][x];
  }

  let setByIndex = (i, cell_number) => {
    let [x, y] = iToXY(i);
    return this.field[y][x] = cell_number;
  }

  initField();
}
