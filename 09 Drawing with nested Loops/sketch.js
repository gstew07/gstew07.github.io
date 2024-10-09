// Drawing with nested loops
// Gavin Stewart
// Oct 9, 2024


let gridSpacing = 837;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
  textAlign(CENTER, CENTER);
}

function loopReview() {
  for (let x = 0; x <= width; x+=20){
    for(let y = 0; y <= height; y+= 20){
      square(x, y, 5);
    }
  }
}

function draw() {
  background(220);
  renderGrid();
  
}

function roundDist(x1, y1, x2, y2){
  let distX = abs(x2 - x1);
  let distY = abs(y2 - y1);

  totDist = sqrt(sq(distX) + sq(distY));
  return round(totDist);
}


function renderGrid(){
  for (let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      let dist = roundDist(x,y,mouseX, mouseY);
      if(dist > 150) fill(0);
      else fill(255, 25, 90);

      circle(x,y, gridSpacing);
      fill(255)

      text(dist, x,y);

    }
  }
}


