// child Class1

class CircleObject extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
    this.size = random(20,40);
  }

  display(){
    strokeWeight(2);
    let d = dist(this.x, this.y, mouseX, mouseY);
    if(d <= this.size/2){
      fill(255,0,0);
    }
    else {
      fill(255);
    }

    circle(this.x, this.y, this.size);
  }
}