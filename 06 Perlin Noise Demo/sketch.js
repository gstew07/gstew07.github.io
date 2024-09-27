// Perlin Noise Demo
// Gavin Stewart
// Sept 27, 2024

//random() vs noise()

let cTime = 5; // Current "noise" time
let cInterval = 0.05; // how fast we move down the noise graph

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6000);
}

function draw() {
  background(220);
  line(width/2, 0,width/2, height);

  randomCircle()


  perlinCircle()
}

function randomCircle(){
  // draw circle using random for unpredictable size/colour
  let cSize = random(10, 255);

  let cB = random(10, 255);
  let cG = random(10, 255);

  fill(cSize, cG, cB)
  circle(width/4, height/2, cSize);

  textAlign(CENTER, CENTER);
  textSize(30);

  fill(0);
  text(round(cSize), width/4, height/2);
  stairCase();
}



function stairCase(){
  for (let x = 0; x < width ; x+= 20){
    rectHeight = random(50,500);
    noFill();
    rect(x, height, 20, -rectHeight)

  }
}

function perlinCircle(){
  // draw circle using noise for more predictible size/colour
  let cSize = noise(cTime); // 0-1
  cSize= map(cSize, 0,1, 10, 255); 

  let cB = noise(cTime+2000); // 0-1
  cB= map(cB, 0,1, 10, 255);
  let cG = noise(cTime+999999999); // 0-1
  cG= map(cG, 0,1, 10, 255);
  fill(cSize, cG, cB)

  circle(3*width/4, height/2, cSize);
  fill(0);
  text(round(cSize), 3*width/4, height/2);

  cTime += cInterval
}
