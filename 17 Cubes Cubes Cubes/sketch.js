// Cubes CUbes Cubes
// Gavin Stewart
// Nov 18 2024

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rotateZ(90);
}

function draw() {
  background(0);
  angle = map(mouseX, 0, width, -90, 90);
  rotateX(frameCount);
  rotateZ(90);
  rotateY(90);

  for(let i = 0; i < 360; i += 45){
    push();
    rotateY(i);
    boxes(30);

    pop();
  }
}

function boxes(size){
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.99);
  }
}