// line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx;
let dy;
let radius = 100;
let rectSize = 100;
let mode = "rectangle";

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   ballArray.push(new Ball(width/2,height/2, random(-15,15),random(-15,15),100));
  
}

function draw() {
  background(255);
  for(i = 0;i < ballArray.length; i++) {
    ballArray[i].move();

    for (let j = 0; j < ballArray.length; j++) {
      if(i !== j && ballArray[i].checkForCollision(ballArray[j])) {
        ballArray[i].fillColor = color(255,0,0);
        ballArray[j].fillColor = color(255,0,0);
      }
    }

    ballArray[i].display();
  }

  
}

function keyPressed() {
  if (key === ' ') {
    ballArray.push(new Ball(width/2,height/2, random(-15,15),random(-15,15),100));
  }
}
    

  



class Ball{
  constructor(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.fillColor = color(0); 
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > width - this.radius/2 || this.x < 0 + this.radius/2) {
      this.dx *= -1;
    }
  
    if (this.y > height - this.radius/2 || this.y < 0 + this.radius/2) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.fillColor);
    circle(this.x, this.y, this.radius * 2);
  }

  checkForCollision(anotherBall) {
    let distanceBewtweenCenters = dist(this.x,this.y,anotherBall.x,anotherBall.y);
    let sumOfRadi = this.radius + anotherBall.radius;
    if(distanceBewtweenCenters < sumOfRadi) {
      return true;
    }else {
      return false;
    }
  }
}







