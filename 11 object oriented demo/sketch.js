// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let movers =[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 1000; i++){
    movers.push(new Mover(random(0, width), random(0, height), random(0, 10), random(0, 10)));
  }
}

function draw() {
  background(0);
  for(let i = 0; i < movers.length; i++){
    movers[i].move();
    movers[i].display();
  }
}


function mouseClicked(){
  movers.push(new Mover(mouseX, mouseY, 2));
}


class Mover{

  constructor(x, y, xSpeed, ySpeed){
  
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  display(){
    fill(255);
    ellipse(this.x,this.y, 10, 10);

  }
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x < 0 || this.x > width) this.xSpeed *= -1;
    if(this.y < 0 || this.y > height) this.ySpeed *= -1;
  }
}
