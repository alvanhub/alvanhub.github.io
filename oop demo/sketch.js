// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  george = new Walker();
  jenna = new Walker();
}

function draw() {
  george.move();
  george.display();
  jenna.move();
  jenna.display();
}

class Walker{
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.fillColor = color(random(255),random(255),random(255));
    this.step = 3;
    this.radius = 3;
  }

  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.x, this.y, this.radius)
  }

  move(){
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.step;
    }else if (choice < 50) {
      this.y += this.step;
    }else if (choice < 75) {
      this.x -= this.step;
    }else if (choice < 100) {
      this.x += this.step;
    }
  }
}