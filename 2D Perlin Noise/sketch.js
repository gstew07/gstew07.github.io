// 2D Perlin Noise
// Gavin Stewart
// Oct. 3rd 2024
// using perlin noise to create a greyscale map

let dOff = 0;
let xPos = 0, yPos = 0
 
let cTime = 0.02

function setup() {
  createCanvas(200, 200);
  noStroke()
  frameRate(2);
}

function draw() {
  background(220);
  xOff = dOff
  yOff = dOff

  // twoDPerlinNoise();
  movingShape()
}

function movingShape() {
  for (let y = 0; y <= height; y++) {
    for (let x = 0; x <= width; x++) {
      let xPos = noise(xOff);
      xPos = (xPos, 0, 1, 0, width);
      let yPos = noise(yOff);
      yPos = (yPos, 0, 1, 0, height);

      let rWidth = noise(xOff);
      rWidth = (rWidth, 0, 1, 0, 20);
      let rHeight = noise(yOff);
      rHeight = (rHeight, 0, 1, 0, 20);

      let r = noise(xOff);
      r = map(r, 0, 1, 0, 255);
      let g = noise((xOff + yOff) / 2);
      g = map(g, 0, 1, 0, 255);
      let b = noise(yOff);
      b = map(b, 0, 1, 0, 255);
      fill(r,g,b);

      rect(xPos, yPos, rWidth, rHeight);

      xOff += cTime
    }
    xOff = 0
    yOff += cTime

  }
}

// function twoDPerlinNoise() {
//   for (let y = 0; y <= height; y++) {
//     for (let x = 0; x <= width; x++) {
//       let r = noise(xOff);
//       r = map(r, 0, 1, 0, 255);
//       let g = noise((xOff + yOff)/2);
//       g = map(g, 0, 1, 0, 255);
//       let b = noise(yOff);
//       b = map(b, 0, 1, 0, 255);

//       stroke(r,g,b);
//       square(x, y, 1);

//       xOff += cTime
//     }
//     xOff = 0
//     yOff += cTime

//   }

// }

function mousePressed() {
  dOff += 4
}
