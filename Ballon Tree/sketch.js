// Ballon Tree
// Gavin STewart
// Nov 14 2024
//


let scale = 15;
let seed;
let angleDif = 18;
let leafLevel =  5, treeHeight = 6;

function setup() {
  createCanvas(500, 500);
  background(255);
  seed = random(100); 
}

function draw() {
  // background(255);
  randomSeed(seed); // sets random seed
  drawTree(width/2, height*.9, 90, treeHeight);
}

function keyPressed(){// decreases amount of leaves
  if(key === "z"){
    leafLevel -= 1;
    if(leafLevel < 1){
      leafLevel = 1;
    }
  }
  if(key === "x"){ // increases amount of leaves
    leafLevel += 1;
    if(leafLevel > treeHeight+1){
      leafLevel = treeHeight+1;
    }
  }
}


function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawLeaf(x,y,depth){ // draws the ballon leaf using x2,y2, and depth with random coloring
  if(depth < leafLevel){
    strokeWeight(0);
    fill(random(255), random(255), random(255), 150);
    circle(x,y,random(5, 10)*depth);
  }
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth
    strokeWeight(1*depth);
    drawLine(x1, y1, x2, y2, depth);
    drawLeaf(x2,y2,depth);

    angleDif = map(mouseX,0, width, 0, 90); // sets the angle of tree branch change to the change of mouseX

    drawTree(x2, y2, angle-angleDif, depth-1);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle+angleDif, depth-1);
  }
}
