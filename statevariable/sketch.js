// line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

particles = [];
let otherParticles = [];
let initialX;
let initialY;
let initialAx = 0;
let initialAy = 0.8;
let limity = 0;
let limitx = 0;
let length;
let gravity;
let yVelocity;
let yAcceleration;
let state = "move";
let ground;
let platformX;
let platformY;
let pWidth = 100;
let pHeight = 25;
let d1 = 3;
let bossX = 500;
let bossY = 500;
let bossSize = 200;
var hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  length = 38;
  initialX = 170;
  initialY = height/2;
  gravity = 1;
  yVelocity = 0;
  yAcceleration = 0;
  platformY = height;
  ground = height - 50;
  platformX = 150;

}

function draw() {
  background(220);
  rect(bossX,bossY,bossSize,bossSize);

  // hit = collideRectCircle(bossX,bossY,bossSize,bossSize,initialX,initialY,7)

  // print("cl?" + hit);
  
  movingPlatforms1()
  
  fill(255);
  yVelocity += yAcceleration;
  yVelocity += gravity;
  initialY += yVelocity;

  yAcceleration = 0;
  if (initialY + length >= ground) {
    initialY = ground - length - 1; 
    yVelocity = 0;
  }
  
  if (initialX>platformX && initialX<platformX+pWidth && initialY<platformY) {
    ground = platformY;
  }else{
    ground += 5;
  }
  
 push();
  if (state === "water") {
     updateParticles(particles, initialX,initialY,initialAx, initialAy);
    updateParticles(particles, initialX,initialY,initialAx + 0.05, initialAy);
    
  if (limity < 30) {
      if (keyIsDown(UP_ARROW)) {
         initialAy -= 0.01;
        limity += 1;
       }
  }
    if (limity > -10) {
       if (keyIsDown(DOWN_ARROW)) {
         initialAy += 0.01;
         limity -= 1;
       }
    }
    if (limitx > -15) {
       if (keyIsDown(LEFT_ARROW)) {
         initialAx -= 0.01;
         limitx -= 1;
       }
    }
    if (limitx < 10) {
       if (keyIsDown(RIGHT_ARROW)) {
         initialAx += 0.01;
         limitx += 1;
       }
    }
  
  }else if (state === "move") {
    updateParticles(particles, initialX,initialY,initialAx, initialAy);
    updateParticles(particles, initialX,initialY,initialAx + 0.05, initialAy);
     
   if (keyIsDown(LEFT_ARROW)) {
     initialX -= 2;
      
   }
   if (keyIsDown(RIGHT_ARROW)) {
     initialX += 4;
     
   }
  }
  pop();
  
  rect(initialX,initialY,length,length);
  
  
  
}

function updateParticles(particleArray,x,y, ax, ay) {
 for (let i = particleArray.length - 1; i >= 0; i--) {
    particleArray[i].update();
    particleArray[i].show(); }
  for (let i = 0; i < 5; i++) {
    
    let p = new Particle(x,y,ax,ay);
    particleArray.push(p);
  
     if (particleArray[i].finished()) {
       particleArray.splice(i, 1);
     }
  } 
}

class Particle {

  constructor(x,y,ax,ay) {
    this.x = x;
    this.y = y;
    this.vx = random(5,6);
    this.vy = random(16,18);
    this.ay = ay;
    this.ax = ax;
    this.alpha = 250;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    
    if (this.y != 0) {
      this.x += this.vx;
      this.y -= this.vy;
      this.vy -= this.ay;
      this.vx += this.ax;
      this.alpha -= 5;
    }   
    if (this.x>bossX && this.x<bossX+bossSize && this.y<bossY && this.y>bossY+bossSize) {
      bossSize -=50;
    }
    
  }

  show() {
    noStroke();
    //stroke(255);
    fill(0,0,255, this.alpha);
    ellipse(this.x, this.y + 40, 7);
  }

}

function keyTyped() {
  if (key === 'a') {
    state = "water";
  }else if (key === 's') {
    state = "move";
  }
}

  function keyPressed() {
    if (state === "move") {
      if (keyCode === UP_ARROW){
        if (initialY >= 100) {
      yAcceleration += -20;
        }
    }
  }
}
function mouseClicked() {
  console.log(initialY);
}

function movingPlatforms1() {
  platformY += d1;
  if (platformY > height || platformY < 0) {
    d1 *= -1;
  }
  rect(platformX,platformY,pWidth,pHeight);
}
