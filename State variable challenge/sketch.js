// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let direction = 0
let x = 0, y = 0
let size = 25, speed = 10

function setup() {
  createCanvas(500, 500);
  fill(50);
  
}

function draw() {
  background(220);

  
  switch (direction) {
    case 0:
      y = 0
      x += speed;
      if (x > width - size) direction = 1;
      break;
    case 1:
      x = width - size
      y += speed;
      if (y > height - size) direction = 2;
      break;
    case 2:
      y = height - size
      x -= speed;
      if (x < 0) direction = 3;
      break;
    case 3:
      x = 0
      y -= speed;
      if (y < 0) direction = 0;
      break;
  
  }
  
  
  square(x,y,size);
  print(speed, size)

}

function keyPressed(){
  if (key === "a"){
    size -= 1
    if(size < 5) size = 5;
  } 
  if (key === "d"){
    size += 1
    if(size > 50) size = 50;
  } 
  if (key === "w"){
    speed += 1
    if(speed > 30) speed= 30;
  } 
  if (key === "s"){
    speed -= 1
    if(speed < 1) speed = 1;
  } 
}
