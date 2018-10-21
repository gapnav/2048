export default function(field, direction) {
  this.moves = 0;
  this.points = 0;

  const WIDTH = field.width();
  const HEIGHT = field.height();

  this.move = () => {
    let dxy = directionXY(direction);
    if (dxy[0] === 0){
      moveY(dxy[1])
    } else {
      moveX(dxy[0])
    }
  }

  let moveX = (dx) => {
    for(let y = HEIGHT-1; y > -1; y--){
      let cells = [];
      for(let xi = WIDTH - 1; xi > -1; xi--){
        let x = xi;
        if (dx < 0) x = WIDTH - 1 - x;
        cells.push([x,y]);
      }
      moveLine(cells);
    }
  }

  let moveY = (dy) => {
    for(let x = WIDTH - 1; x > -1; x--){
      let cells = [];
      for(let yi = HEIGHT - 1; yi > -1; yi--){
        let y = yi;
        if (dy < 0) y = HEIGHT - 1 - y;
        cells.push([x,y]);
      }
      moveLine(cells);
    }
  }

  let moveLine = (cellsXY) => {
    let cells = cellsXY.map(xy => field.field[xy[1]][xy[0]]);
    let new_cells = [];
    cells.filter(c => !!c).forEach(cell => {
      if (new_cells[0] && new_cells[0].canJoinWith(cell)){
        this.points += new_cells[0].joinWith(cell);
      } else {
        new_cells.unshift(cell);
      }
    });
    while(new_cells.length < cells.length) new_cells.unshift(null);
    new_cells = new_cells.reverse();
    this.moves += trailingNullsCount(new_cells) - trailingNullsCount(new_cells);

    cellsXY.forEach(xy => {
      field.field[xy[1]][xy[0]] = new_cells.shift();
    });
  }

  let directionXY = (direction) => {
    let [x, y] = [0, 0];
    switch (direction){
      case 'up':
        y = -1;
        break;
      case 'down':
        y = 1;
        break;
      case 'left':
        x = -1;
        break;
      case 'right':
        x = 1;
        break;
      default:
        throw 'Wrong direction ' + direction;
    }
    return [x, y];
  }

  let trailingNullsCount = (arr) => {
    let count = arr.reverse().findIndex(x => !!x);
    if (count < 0) count = arr.length;
    return count;
  }
}
