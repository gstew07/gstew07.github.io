// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[0, 255, 255, 255, 0, 0, 255, 0, 255, 255, 0],
[255,   0, 255,   0,   0, 255,   0, 255,   0, 255],
[255, 255,   0, 255, 255, 255,   0, 255,   0, 255],
[255,   0, 255,   0,   0, 255,   0,   0, 255,   0],
[  0, 255, 255,   0, 255, 255,   0, 255,   0, 255],
[  0, 255,   0, 255, 255,   0, 255, 255,   0,   0]];

const NUM_ROWS = 6;
const NUM_COLS = 10;

let rectWidth, rectHeight;

function getArrayY() {
  return int(mouseY / rectHeight);
}
function getArrayX() {
  return int(mouseX / rectHeight);
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500 / NUM_COLS;
  rectHeight = 300 / NUM_ROWS;
}

function draw() {
  row = getArrayY();
  col = getArrayX();

  background(220);
  renderGrid();

  // if(frameCount%30 === 0){
  //   grid[round(random(NUM_ROWS - 1))][round(random(NUM_COLS -1))] = int(random(0, 255));
  // }

  // print(mouseX, rectWidth, int(mouseX/rectWidth));
}
function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(grid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }

}
function mouseClicked() {
  if (grid[row][col] === 255) {
    grid[row][col] = 0;
  }
  else {
    grid[row][col] = 255;
  }

  if (keyCode === SHIFT) {
    for (let r = 0; r < NUM_ROWS; r++) {
      for (let c = 0; c < NUM_COLS; c++) {
        if (grid[r][c] === 255) {
          grid[r][c] = 0;
        }
        else {
          grid[r][c] = 255;
        }
      }
    }
  }
}