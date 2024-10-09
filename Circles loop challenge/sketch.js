// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let c1 = (255, 200,80), c2 = (90, 255 ,0), c3 = (0, 155, 200);
let colors = [c1, c2, c3];
let cValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircles(mouseX, mouseY);
}

function drawCircles(x1, y1){
  for (let x = 0; x < width ; x += 60){
    circle(x, 0, 20);
    line(x, 0, x1, y1);
    fill(colors[cValue]);
    quad(x, 0, x+60, 0, x1 , y1, x1, y1);

    cValue += 1;
    if (cValue > 2){
      cValue = 0;
    }
  }
  for (let y = 0; y < height ; y += 60){
    circle(width, y, 20);
    line(width, y, x1, y1);
    fill(colors[cValue]);
    quad(width, y, width ,y +60, x1 , y1, x1, y1);

    cValue += 1;
    if (cValue > 2){
      cValue = 0;
    }
  }
  for (let x = width; x > 0 ; x -= 60){
    circle(x, height, 20);
    line(x, height, x1, y1);

    fill(colors[cValue]);
    quad(x, height, x-60, height , x1 , y1, x1, y1);

    cValue += 1;
    if (cValue > 2){
      cValue = 0;
    }
  }
  for (let y = height; y > 0; y -= 60){
    circle(0, y, 20);
    line(0, y, x1, y1);

    fill(colors[cValue]);
    quad(0, y, 0 ,y - 60, x1 , y1, x1, y1);

    cValue += 1;
    if (cValue > 2){
      cValue = 0;
    }
  }
  fill(0);
  circle(x1, y1, 20);
}
