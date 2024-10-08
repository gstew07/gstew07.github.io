// Working with images
// Gavin Stewart
// Oct. 4 2024

let lionL, lionR, Pin0, Pin1, Pin2, Pin3, Pin4, Pin5, Pin6, Pin7, Pin8;
let pinNum = 0;
let facingRight = true;
let pinImage  = [];

function preload(){
  lionL = loadImage('/assets/lion-left.png');
  lionR = loadImage('/assets/lion-right.png');
  for(let i = 0; i < 9 ; i++){
    pinImage.push(loadImage("/assets/pin-0"+i+".png"));
  }
  

  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(220);
  imageMode(CENTER);

  drawLions();
  pinWheel();
  for (let i = 0; i < 10000; i++){
    background(220);
    pinWheel();
    drawLions();
  }
  print(frameRate())

}

function drawLions(){
  // check the mouse movement direction
  if(mouseX > pmouseX) facingRight = true;
  else if(mouseX < pmouseX) facingRight = false;



  //display one of the lion images
  if (facingRight){
    image(lionR, mouseX , mouseY, lionR.width/2, lionR.height/2);
  }
  else {
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}

function pinWheel(){
  image(pinImage[pinNum], width/2, height/2);
  pinNum += 1;
  if (pinNum > 8){
    pinNum = 0;
  } 

}