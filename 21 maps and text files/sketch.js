// Map and Text Files
// .split()   spread syntax

let grid, img, rows, cols, colorMap, textFile;

function preload(){
  img = loadStrings("assets/colorImage.txt");
  textFile = loadStrings("assets/info.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // processText();

  // determine the # of rows/cols
  rows = img.length;  cols = img[0].length;

  //create and populate the 2D grid(grid)
  grid = [];
  for(let i = 0; i < rows; i++){
    grid.push([...img[i]]);
  }

  //create map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150, 150, 255)]
  ]);
}

function draw() {
  renderGrid();
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function renderGrid(){
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function processText(){ 
  // print("SPLIT INTO WORDS");
  // let splitWords = textFile[0].split(" ");
  // print(splitWords);

  // print("SPLIT INTO CHARACTERS");
  // let splitChars = textFile[1].split("");
  // print(splitChars);

  // print("SPREAD INTO CHARCTERS");
  // let spreadChars = [...textFile[2]];
  // print(spreadChars);
}