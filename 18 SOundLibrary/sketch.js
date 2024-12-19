// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music, bounceSound;
let started = false;
let pos; let vel;
let totalBounces = 0;

function preload(){
  music = loadSound("assets/background.mp3");
  bounceSound =  loadSound("assets/bounceSound.wav");
}

function setup() {
  createCanvas(300, 200);
  pos = createVector(width/2, height/2);
  vel = createVector(99,99);
  textSize(30);
  textAlign(CENTER);
  if(localStorage.getItem("bounce")===null){
    localStorage.setItem("bounce",0);
  }
  else{
    totalBounces = localStorage.getItem("bounce");
  }
}

function draw() {
  background(220);
  if(started === false){
    text("Clickk to Begin", width/2, height/2);
    if(mouseIsPressed){
      started = true;
      music.setVolume(0.1);
      music.loop();
    }
  }
  else{
    updateBall();
    text(totalBounces, width/2, height/2);
  }
}

function updateBall(){
  bounceSound.setVolume(0.9);
  pos.add(vel);
  if(pos.x < 10 || pos.x > width-10){
    totalBounces++;
    bounceSound.play();
    vel.x *= -1;
  }
  if(pos.y < 10 || pos.y > height-10){
    totalBounces++;
    bounceSound.play();
    vel.y *= -1;
  }
  circle(pos.x,pos.y,20);
}