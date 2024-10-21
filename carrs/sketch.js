// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let car;
let eastbound =[], westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  for(let i = 0; i < 20; i++){
    eastbound.push(car = new Vehicle(0, [random(0,255), random(0,255), random(0,255)], 0, random(height/2,height/2 + 275), 1, 7));
  }
}

function draw() {
  background(220);
  drawRoad();
  car.action();
}

function drawRoad() {
  fill(0);
  rect(width / 2, height / 2, width, 600);
  for (let i = 0; i < width; i += 60) {
    fill(255);
    rect(i + 20, height / 2, 40, 5);
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

function drawTruck(x, y, color) {
  fill(color);
  rect(x - 10, y, 40, 30);
  rect(x + 20.0, y, 15, 30);
}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  display() {
    if (this.type === 0) {
      drawCar(this.x, this.y, this.color);
    }
    else {
      drawTruck(this.x, this.y, this.color);
    }
  }
  move() {
    this.x += this.xSpeed;
  }
  speedUp() {
    if (this.xSpeed > 0) {
      this.xSpeed += 1;
      if (this.xSpeed > 15){
        this.xSpeed = 15;
      }
    }
    else {
      this.xSpeed -= 1;
      if (this.xSpeed < -15){
        this.xSpeed = -15;
      }
    }
  }
  speedDown(){
    if (this.xSpeed > 0) {
      this.xSpeed -= 1;
      if (this.xSpeed === 0){
        this.xSpeed = 1;
      }
    }
    else {
      this.xSpeed += 1;
      if (this.xSpeed === 0){
        this.xSpeed = -1;
      }
    }
  }
  changeColor(){
    this.color= [random(0,255),random(0,255) ,random(0,255)];
  }
  action(){
    car.move();
    let rNum = random(1, 100);
    if(rNum === 50){
      car.speedUp();
    }
    if(rNum === 47){
      car.speedDown();
    }
    if(rNum === 98){
      car.changeColor();
    }
    car.display();

  }
}