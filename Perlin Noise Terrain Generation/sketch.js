// Perlin Noise Terrain Generation
// Gavin Stewart
// Oct. 1 2024
//using Perlin noise to generate random terrain

let rectWidth = 5
let tColor = 0

let tTime0 = 5; // Current "noise" time
let tInterval = 0.02; // how fast we move down the noise graph


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  generateTerrain();
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag(width/2, height/2);
}

function generateTerrain(){
  let tTime1 =tTime0
  for (let x = 0; x < width ; x+= rectWidth){
    let rectHeight = noise(tTime1);
    rectHeight = map(rectHeight, 0, 1, 50, 500);

    tColor = noise(tTime1);
    tColor = map(tColor, 0, 1, 0, 125)
    fill(tColor)
    stroke(tColor)
    rect(x, height, rectWidth, -rectHeight)
    tTime1 += tInterval
  }
}

function keyPressed(){
  if (keyCode === 37){
    rectWidth -= 1;
    if(rectWidth < 1) rectWidth = 1;
  }
  else if(keyCode === 39){
    rectWidth += 1
    if (rectWidth > 20) rectWidth = 20;
  }
  
}

function drawFlag(x, y){
  fill(0);
  stroke(0);
  line(x,y,x,y+30);
  triangle(x, y + 10, x, y, x + 10, y + 5)
}