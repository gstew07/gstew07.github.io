// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let car;
let eastbound = [], westbound = [];
let lightMod = 1;
let fCount, lightColor = "green";

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(round(random(0, 1)), [random(0, 255), random(0, 255), random(0, 255)], random(0, width), random(height / 2 + 20, height / 2 + 275), 1, random(1, 15)));
    westbound.push(new Vehicle(round(random(0, 1)), [random(0, 255), random(0, 255), random(0, 255)], random(0, width), random(height / 2 - 275, height / 2 - 20), 0, random(-15, -1)));
  }
  print(lightMod);
}

function draw() {
  background(220);
  drawRoad();
  for (let v of eastbound) {
    v.action();
  }
  for (let v of westbound) {
    v.action();
  }
  stopLight();
}
function stopLight() {
  fill(255,255,0);
  rect(width/2, height/2 - 400, 75, 150);
  for(let i = 1; i < 4; i++){
    fill(50);
    circle(width/2, height/2 - 475 + (50*i - 25), 45);
  }
  if (keyIsPressed && key === " ") {
    lightColor = "yellow";
    fCount = 0;
    print("stop");
  }
  if (lightColor === "yellow") {
    fill(255,200,0);
    circle(width/2, height/2 - 475 + (100 - 25), 45);
    lightMod -= 0.005;
  }
  if (lightMod <= 0) {
    fill(255,0,0);
    circle(width/2, height/2 - 475 + (50 - 25), 45);
    lightColor = "red";
    fCount += 1;
    if (fCount === 120) {
      lightColor = "green";
    }
  }
  if (lightColor === "green") {
    fill(0,255,0);
    circle(width/2, height/2 - 475 + (150 - 25), 45);
    lightMod += 0.005;
    lightMod *= 1.05;
    if (lightMod >= 1) {
      lightMod = 1;
    }
  }
}

function mouseClicked() {
  if (keyIsPressed && keyCode === SHIFT) {
    for (let i = 0; i < 20; i++) {
      westbound.push(new Vehicle(round(random(0, 1)), [random(0, 255), random(0, 255), random(0, 255)], random(0, width), random(height / 2 - 275, height / 2 - 20), 0, random(-15, -1)));
    }
  }
  else {
    for (let i = 0; i < 20; i++) {
      eastbound.push(new Vehicle(round(random(0, 1)), [random(0, 255), random(0, 255), random(0, 255)], random(0, width), random(height / 2 + 20, height / 2 + 275), 1, random(1, 15)));
    }
  }
}

function drawRoad() {
  fill(0);
  rect(width/2, height /2, width, 600);
  fill(255,255,0);
  rect(width/2, height/2 + 2, width, 2);
  rect(width/2, height/2 - 2, width, 2);
  for(let y = height/2 - 300; y < height/2; y += 30){
    for (let x = 0; x < width; x += 60) {
      fill(255);
      rect(x + 20, y, 40, 2);
    }
  }
  for(let y = height/2 + 300; y > height/2; y -= 30){
    for (let x = 0; x < width; x += 60) {
      fill(255);
      rect(x + 20, y, 40, 2);
    }
  }
  


}

function drawCar(x, y, color) {
  fill(color);
  rect(x, y, 40, 15);
  fill(255);
  rect(x + 15, y + 7.5, 4, 1);
  rect(x + 15, y - 7.5, 4, 1);
  rect(x - 15, y - 7.5, 4, 1);
  rect(x - 15, y + 7.5, 4, 1);
}

function drawTruck(x, y, color, direction) {
  fill(color);
  if (direction === 1) {
    rect(x - 10, y, 40, 30);
    rect(x + 20.0, y, 15, 30);
  }
  else {
    rect(x + 10, y, 40, 30);
    rect(x - 20.0, y, 15, 30);
  }

}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.laneS = 0;
  }
  display() {
    if (this.type === 0) {
      drawCar(this.x, this.y, this.color);
    }
    else {
      drawTruck(this.x, this.y, this.color, this.direction);
    }
  }
  move() {
    this.x += this.xSpeed * lightMod;
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }
  speedUp() {
    if (this.xSpeed > 0) {
      this.xSpeed += 1;
      if (this.xSpeed > 15) {
        this.xSpeed = 15;
      }
    }
    else {
      this.xSpeed -= 1;
      if (this.xSpeed < -15) {
        this.xSpeed = -15;
      }
    }
  }
  speedDown() {
    if (this.xSpeed > 0) {
      this.xSpeed -= 1;
      if (this.xSpeed <= 0) {
        this.xSpeed = 1;
      }
    }
    else {
      this.xSpeed += 1;
      if (this.xSpeed >= 0) {
        this.xSpeed = -1;
      }
    }
  }
  changeColor() {
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
  }
  laneSelect(){
    if(this.xSpeed > 0){
      this.laneS = round(map(this.xSpeed, 0, 15, 0, 9));
      this.y = (height/2 - 300) +  (30*this.laneS+15);
    }
    if(this.xSpeed < 0){
      this.laneS = round(map(this.xSpeed, -15, 0, -9, 0));
      this.y = (height/2 + 300) + (30*this.laneS-15);
    }
    
    
  }
  action() {
    this.move();
    let rNum = random(1, 100);
    rNum = round(rNum);
    if (rNum === 50) {
      this.speedUp();
    }
    if (rNum === 47) {
      this.speedDown();
    }
    if (rNum === 98) {
      this.changeColor();
    }
    this.laneSelect();
    this.display();

  }

}