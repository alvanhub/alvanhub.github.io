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
let platformX1;
let platformY1;
let platformX2;
let platformY2;
let pWidth = 100;
let pHeight = 25;
let add1 = 3;
let add2 = 3;
let d1 = 3;
let d2 = -3;
let d3 = 3;
let bossX = 500;
let bossY = 500;
let bossSize = 200;
let timer = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  length = 38;
  initialX = 170;
  initialY = height/2;
  gravity = 1;
  yVelocity = 0;
  yAcceleration = 0;
  platformY1 = height;
  platformX1 = 150;
  platformY2 = height/2;
  platformX2 = 400;
  ground = height - 50;

}

function draw() {
  background(220);
  timeLeft();

  
  rect(bossX,bossY,bossSize,bossSize);

   
  
  movingPlatforms1();
  movingPlatforms2();
  
  fill(255);
  yVelocity += yAcceleration;
  yVelocity += gravity;
  initialY += yVelocity;

  yAcceleration = 0;
  if (initialY + length >= ground) {
    initialY = ground - length - 1; 
    yVelocity = 0;
  }
  
  if (initialX>platformX1 && initialX<platformX1+pWidth  && initialY<platformY1) {
    ground = platformY1;
  }
  else if (initialX>platformX2 && initialX<platformX2+pWidth && initialY<platformY2) {
    ground = platformY2;
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
    if (limitx > -50) {
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
    if (particleArray[i].finished()) {
      particleArray.splice(i, 1);
     }
    particleArray[i].show(); }
  for (let i = 0; i < 5; i++) {
    
    let p = new Particle(x,y,ax,ay);
    particleArray.push(p);
  
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
    return this.alpha <= 0;
  }

  update() {
    
    if (this.y != 0) {
      this.x += this.vx;
      this.y -= this.vy;
      this.vy -= this.ay;
      this.vx += this.ax;
      this.alpha -= 4;
    }   
     if (this.x>bossX && this.x<bossX+bossSize && this.y>bossY && this.y<bossY+bossSize) {
       bossSize -=0.009;
       bossY -= add1;
       bossX += add2;
       if (bossX > windowWidth - 200|| bossX < 200) {
         add2 *= -1;
      }else if (bossY < 200 || bossY > windowHeight -200){
        add3 *= -1;
      }
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
        if (ground === platformY1 || ground === platformY2){
        yAcceleration += -20;
        }
    }
  }
}


function movingPlatforms1() {
  platformY1 += d1;
  if (platformY1 > height || platformY1 < 0) {
    d1 *= -1;
  }
  rect(platformX1,platformY1,pWidth,pHeight);
}

function movingPlatforms2() {
  platformY2 += d2;
  if (platformY2 > height || platformY2 < 0) {
    d2 *= -1;
  }
  rect(platformX2,platformY2,pWidth,pHeight);
}

function timeLeft() {
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width/2, 200);

  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer === 0){
    text("GAME",width/2,200);
  }
}
