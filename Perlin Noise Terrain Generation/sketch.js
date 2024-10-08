// Perlin Noise Terrain Generation
// Gavin Stewart
// Oct. 1 2024
//using Perlin noise to generate random terrain

let rectWidth = 10
let tColor = 0

let tTime0 = 5; // Current "noise" time
let tInterval = 0.02; // how fast we move down the noise graph

let maxX = 0, maxY = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  generateTerrain();
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag(maxX, maxY);
  tTime0 += 0.1 * (10/rectWidth)// adds paning
  print(frameRate());
}

function generateTerrain(){
  let avgY = 0
  maxY = height

  let tTime1 =tTime0 // resets the "noise" time every rotation
  for (let x = 0; x < width ; x+= rectWidth){
    let rectHeight = noise(tTime1);
    rectHeight = map(rectHeight, 0, 1, 100, 1000);

    tColor = noise(tTime1);
    tColor = map(tColor, 0, 1, 0, 125)
    fill(tColor)
    stroke(tColor)

    rect(x, height, rectWidth, -rectHeight)

    tTime1 += tInterval

    if (height - rectHeight < maxY){
      maxX = x;
      maxY = height - rectHeight;
    }
    avgY += height - rectHeight //adds all y-values together
  }
  avgY = avgY/(width/rectWidth) // uses all y-values to average their height
  stroke(255,0,0)
  line(0, avgY, width, avgY)
}

function keyPressed(){ //changes terrain size
  if (keyCode === 37){
    rectWidth -= 1;
    if(rectWidth < 1) rectWidth = 1;
  }
  else if(keyCode === 39){
    rectWidth += 1
    if (rectWidth > 20) rectWidth = 20;
  }
  
}

function drawFlag(x, y){ // draws flag using x,y location
  fill(0);
  stroke(0);
  line(x,y,x,y-30);
  triangle(x, y -40, x, y - 30, x + 10, y - 35)
}
