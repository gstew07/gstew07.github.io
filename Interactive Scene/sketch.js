// Escape the facilty
// Gavin Stewart
// Sept. 17 2024
//


function setup() {
  createCanvas(800, 450);
  rectMode(CENTER)
  noStroke()
}
let locationValue = 0
let houseSize = 50


function draw() {
  background(220);
  if (locationValue === 0){
    fill(50, 200, 75)
    rect( width/2, 3 * (height/4) + 25, width, height/2 - 50);
    fill(0,60 ,200);
    rect( width/2, height/4 + 25 , width, height/2 + 50);

  }
  fill(181, 101, 29);
  rect(3*width/4, 250, 1.6*houseSize, 50);
  fill(150, 70, 25);
  rect(580, 257, 20, 35)
  triangle(540, 225, 600, 175, 660, 225);
  fill(225, 225, 255);
  square(620, 243, 14);

}
