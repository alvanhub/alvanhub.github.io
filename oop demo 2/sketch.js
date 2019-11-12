// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = theFireworks.length - 1;i>=0;i--){
    theFireworks[i].move();
    if(theFireworks[i].isDone()){
      theFireworks.splice(i,1)
    }
    theFireworks[i].display();
  }
  // if (mouseIsPressed){
  //   let myFirework = new Bullet(mouseX,mouseY,random(-3,3),random(-3,3), 10 * 2);
  //   theFireworks.push(myFirework);
  // }
}

 function mousePressed() {
   for(let i = 0; i < 100; i++) {
     let myFirework = new Bullet(mouseX,mouseY,random(-3,3),random(-3,3), 10 * 3);
     theFireworks.push(myFirework);
    }
 }

class Particle {
  constructor(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
  }

  display() {
    fill(255,0,0,this.alpha);
    circle(this.x,this.y,this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 1;
  }

  isDone() {
    return this.alpha <= 0;
  }
}