// puzzzle game
// Gavin Stewart
// Oct. 29 2024
// puzzle game made with 2d arrays with the goal of getting all white or all black squares

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 255, 0, 0, 0],
[255, 255, 255, 0, 0]];
let winValue; // variable to check if I won


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  textAlign(CENTER, CENTER);
  randomBoard();
}

function draw() {
  if (abs(winValue) === NUM_COLS * NUM_ROWS) { //puts up the win screen and has a rest function
    background(220);
    textSize(200);
    fill(0);
    text("YOU WIN!", width/2, height/2);
    textSize(50); 
    text("press r to reset", width/2, height/2 + 100);  
    if(keyIsPressed && key === "r") {
      winValue = 0;
      randomBoard();
    }
  }
  else{
    background(220);
    determineActiveSquare();   //figure out which tile the mouse cursor is over
    drawGrid();   //render the current game board to the screen (and the overlay)
    winCondition();
    overlay(currentCol, currentRow);
  } 
              
}



function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (keyIsPressed && keyCode === SHIFT) { // cheater mode using shift
    flip(currentCol, currentRow);
  }
  else if(keyIsPressed && key === " "){ // square mode using space
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol + 1, currentRow + 1);
    flip(currentCol, currentRow + 1);
  }
  else {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function randomBoard(){ // resets with a new random board
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      gridData[y][x] = round(random(0,1))*255;
    }
  }
}
function overlay(col, row){ // overlays green rectangle over the spots that will change
  fill(20, 150, 60, 100);
  if (keyIsPressed && keyCode === SHIFT) { // cheater
    rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight);
  }
  else if(keyIsPressed && key === " "){ //square
    rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight);
    rect((col+1)*rectWidth, row*rectHeight, rectWidth, rectHeight);
    rect((col+1)*rectWidth, (row+1)*rectHeight, rectWidth, rectHeight);
    rect(col*rectWidth, (row+1)*rectHeight, rectWidth, rectHeight);
  }
  else{ // cross
    rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight);
    rect((col-1)*rectWidth, row*rectHeight, rectWidth, rectHeight);
    rect((col+1)*rectWidth, row*rectHeight, rectWidth, rectHeight);
    rect(col*rectWidth, (row+1)*rectHeight, rectWidth, rectHeight);
    rect(col*rectWidth, (row-1)*rectHeight, rectWidth, rectHeight);
  }
  

}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() { // checks if I have one by add ing 1 per white and subtract 1 per black rectangles
  winValue = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if (gridData[y][x] === 0) winValue += 1;
      else winValue -= 1;
    }
  }

}
