// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bulletArray = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
  bullet = new Bullet(200, 100, 0, 3, bulletImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  enterprise.handleKeyPress();

}



// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.shipX = x;
    this.shipY = y;
    this.enterprise = theImage;

  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsPressed){
      if (key === "a") {
        this.shipX -= 2;
      }
      if (key === "w") {
        this.shipY -= 2;
      }
      if (key === "s") {
        this.shipY += 2;
      }
      if (key === "d") {
        this.shipX += 2;
      }
    }
    
  
  
  // if doing extra for experts, show bullet(s)
}

display() {
  image(this.enterprise,this.shipX,this.shipY)
  // show the ship
}

handleKeyPress() {
  // you only need to use this if you are doing the extra for experts...
  // if you are, you should make a bullet if the space key was pressed
  if(keyIsPressed && keyCode === 32){
    bulletArray.push(new Bullet(this.shipX, this.shipY, 0, 3, bulletImage));
  }
    
    for( let b of bulletArray){
      b.update();
      b.display();
      b.isOnScreen();
    }
  
    print(bulletArray); 
}
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...
 
class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.bulletX = x;
    this.bulletY = y;
    this.dx = dx;
    this.dy = dy;
    this.bullet = theImage
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.bulletY -= this.dy
    
    
  }

  display() {
    // show the bullet
    image(this.bullet, this.bulletX, this.bulletY)
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if(this.bulletY <=0 ){
      bulletArray.shift();
    }
  }
}

