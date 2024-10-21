// Planets and moons
// Gavin STewart
// Oct 18 2024

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0);
  myPlanet.display();
}

function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

class Planet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 200;
    this.moons = [];
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    fill(200, 70, 40);
    circle(this.x, this.y, this.r);
    for(let m of this.moons){
      m.update();
    }
  }
}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 30;
    this.speed = 5;
    this.steps = 30;
  }

  update(){
    this.x += this.speed;
    this.steps--;
    if(this.steps === 0){
      this.steps = 60;
      this.speed *= -1;
    }
    circle(this.x, this.y, this.r);
  }
}