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
let houseColour = 0 
let dho = 0 // Door and window height offset value from house


function draw() {
  background(220);
  dho = (0.7*houseSize)/5

  if (locationValue === 0){  //  location 1
    houseColour = 0

    fill(50, 200, 75)
    rect( width/2, 3 * (height/4) + 25, width, height/2 - 50);
    fill(0,60 ,200);
    rect( width/2, height/4 + 25 , width, height/2 + 50);

  }
  if (locationValue === 1){ // location 2
    houseColour = 50

    fill(0, 51, 0)
    rect( width/2, 3 * (height/4) + 25, width, height/2 - 50);
    fill(0,0 ,0);
    rect( width/2, height/4 + 25 , width, height/2 + 50);

  }
  if (locationValue === 2){  // location 3
    houseColour = 25

    fill(51, 0, 0)
    rect( width/2, 3 * (height/4) + 25, width, height/2 - 50);
    fill(102 ,51 ,0);
    rect( width/2, height/4 + 25 , width, height/2 + 50);

  }
  if (locationValue === 3){  // location 4
    houseColour = -25
    fill(139,69,19)
    rect( width/2, 3 * (height/4) + 25, width, height/2 - 50);
    fill(176,196,222);
    rect( width/2, height/4 + 25 , width, height/2 + 50);

  }

  fill(181 - houseColour, 101 - houseColour, 29 - houseColour); // house shapes code
  rect(mouseX, 275 - houseSize/2, 1.6*houseSize, 1*houseSize);
  fill(150 - houseColour, 70 - houseColour, 25 - houseColour);
  rect(mouseX - 0.4*houseSize, 275 - (houseSize/2) + dho, 0.4*houseSize, 0.7*houseSize)
  triangle(mouseX - 1.2*houseSize, 275 - houseSize, mouseX, 275 - 2*houseSize, mouseX + 1.2*houseSize, 275 - houseSize);
  fill(225 - houseColour, 225 - houseColour, 255 - houseColour);
  square(mouseX + 0.4*houseSize, 275 - (houseSize/2) - dho, 0.28*houseSize);

  textFont('Freestyle Script', 20)

  text("Gavin Stewart", 720, 440)


  if (keyIsPressed && key === "x") {  // house resizing using Z and X
    houseSize += -1
  }
  if (keyIsPressed && key === "z") {
    houseSize += 1
  }

}

function mouseClicked() { // switches through background when mouse button clicked
  locationValue += 1
  if (locationValue > 3){
    locationValue = 0
  }
}
