// Recaman Sequence
// Gavin Stewart
// Nov. 1

let sequence = [];
let stepAmount = 1; 
let currentValue = 0;

let arcList = [];
let scaleAmount = 0, largest = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  noFill();
}

function draw() {
  background(0);
  translate(0, height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largest, 0.05);
  scale(scaleAmount);
  renderArcs();

}

function addToSequence(){
  let backwards = currentValue - stepAmount;
  if(backwards > 0 && !sequence.includes(backwards)){
    arcList.push(new rArc(currentValue, backwards, sequence.length%2, random(255), random(255), random(255)));
    sequence.push(backwards);
    currentValue = backwards;
    stepAmount++;
  }
  else{
    let forwards = currentValue + stepAmount;
    arcList.push(new rArc(currentValue, forwards, sequence.length%2, random(255), random(255), random(255)));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
  }
  if(currentValue > largest){
    largest = currentValue;
  }
}

function renderArcs(){
  for(let r of arcList){
    r.display();
  }
}

class rArc{
  constructor(start, end, direction,r,g,b){
    this.start = start;
    this.end = end;
    this.direction = direction;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display(){
    let diameter = abs(this.start - this.end); // diameter
    let x = (this.start + this.end)/2;         // center point
    strokeWeight(0.5);
    stroke(this.r,this.g,this.b);
    if(this.direction === 0){
      arc(x, 0, diameter, diameter, 0, PI);
    }
    else{
      arc(x, 0, diameter, diameter, PI, 0);
    }
  }
}
