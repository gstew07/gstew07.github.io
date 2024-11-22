// Tic Tac Toe
// Gavin Stewart
// Nov. 6

ticTacGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]];

const ROWS = 3, COLUMNS = 3;
let rectWidth, rectHeight;
let currentRow, currentCol;
let turn = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeight = height/3;
  rectWidth = width/3;
}

function draw() {
  background(220);
  determineBox();
  generateGrid();
}

function determineBox(){
  currentCol = int(mouseX/rectWidth);
  currentRow = int(mouseY/rectHeight);
  print(currentCol, currentRow);
}

function drawX(row, col) {
  stroke(0, 0, 220);
  strokeWeight(10);
  line(rectWidth * col + 25, rectHeight * row + 25, rectWidth * (col + 1) - 25, rectHeight * (row + 1) - 25);
  line(rectWidth * (col + 1) - 25, rectHeight * row + 25, rectWidth * col + 25, rectHeight * (row + 1) - 25);
  stroke(255);
  strokeWeight(2);
  line(rectWidth * col + 25, rectHeight * row + 25, rectWidth * (col + 1) - 25, rectHeight * (row + 1) - 25);
  line(rectWidth * (col + 1) - 25, rectHeight * row + 25, rectWidth * col + 25, rectHeight * (row + 1) - 25);
}

function drawCircle(row, col){
  stroke(220, 0, 0);
  strokeWeight(10);
  noFill();
  circle(rectWidth * col + rectWidth / 2, rectHeight * row + rectHeight / 2, 3 * rectWidth / 4);
  strokeWeight(2);
  stroke(255);
  circle(rectWidth * col + rectWidth / 2, rectHeight * row + rectHeight / 2, 3 * rectWidth / 4);
}

function play(row, col){
  if(turn % 2 === 0){
    if(ticTacGrid[row][col] === 0){
      ticTacGrid[row][col] = 1;
      turn += 1;
      winCondition(1, row, col);
    }
  }
  else if(turn % 2 === 1){
    if(ticTacGrid[row][col] === 0){
      ticTacGrid[row][col] = 2;
      turn += 1;
      winCondtion(2, row, col);
    }
  }
  
}

function generateGrid() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      fill(0);
      noStroke();
      rect(rectWidth * col, rectHeight * row, rectWidth, rectHeight);
      if (ticTacGrid[row][col] === 1) {
        drawX(row, col);
      }
      if (ticTacGrid[row][col] === 2) {
        drawCircle(row, col);
      }
      stroke(255);
    }
  }
  strokeWeight(10);
  stroke(199, 36, 177);
  line(width / 3, 0, width / 3, height);
  stroke(224, 231, 34);
  line(2 * width / 3, 0, 2 * width / 3, height);
  stroke(68, 214, 44);
  line(0, height / 3, width, height / 3);
  stroke(255, 173, 0);
  line(0, 2 * height / 3, width, 2 * height / 3);

  strokeWeight(2);
  stroke(255);
  line(width / 3, 0, width / 3, height);
  line(2 * width / 3, 0, 2 * width / 3, height);
  line(0, height / 3, width, height / 3);
  line(0, 2 * height / 3, width, 2 * height / 3);
}

function mousePressed(){
  play(currentRow, currentCol);
}

function winCondtion(shape, row, col){
  if(shape === 1){

  }
  else if(shape === 2){
    
  }
}

