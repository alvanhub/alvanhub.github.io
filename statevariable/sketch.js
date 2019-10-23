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
let motion = "move";
let state = "menu";
let ground;
let platformX1;
let platformY1;
let platformX2;
let platformY2;
let platformX3;
let platformY3;
let platformX4;
let platformY4;
let platformX5;
let platformY5;
let pWidth = 100;
let pHeight = 25;
let add1 = 3;
let add2 = 3;
let d1 = 6;
let d2 = -6;
let d3 = 6;
let d4 =-6;
let d5 = 6;
let bossX = 500;
let bossY = 500;
let bossSize = 200;
let timer = 1;
let fire;
let water;

function preload() {
  fire = loadImage("assets/fire.png");
  water = loadImage("assets/water.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  length = 70;
  initialX = 170;
  initialY = height/2;
  gravity = 1;
  yVelocity = 0;
  yAcceleration = 0;
  platformY1 = height;
  platformX1 = 150;
  platformY2 = height/2;
  platformX2 = 400;
  platformY3 = height/2;
  platformX3 = 650;
  platformY4 = height/2;
  platformX4 = 850;
  platformY5 = height/2;
  platformX5 = 1050;
  ground = height - 50;

}

function draw() {
  background(220);
  if (state === "menu") {
    menu();
    checkButtonClick();
  }

  if (state === "gameplay"){
    movingPlatforms1();
    movingPlatforms2();
    movingPlatforms3();
    movingPlatforms4();
    movingPlatforms5();
    
    push();
    commandControls();
    pop();
    createAvatar();
    createBoss();
    timeLeft();
  }
  if (state === "gameOver") {
    gameOver();
    checkButtonClick();
  }
  if (state === "winner"){
    winner();
    checkButtonClick();
  }
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
      this.vx = random(2,3);
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
      this.alpha -= 4.6;
    }   
     if (this.x>bossX && this.x<bossX+bossSize && this.y>bossY && this.y<bossY+bossSize) {
       bossSize -=0.05;
       bossY -= add1;
       bossX += add2;
       if (bossX > windowWidth || bossX < 100) {
         add2 *= -1;
      }else if (bossY < 100 || bossY > windowHeight){
        add1 *= -1;
      }
     }
    
  }

  show() {
    noStroke();
    stroke(255);
    fill(0,0,255, this.alpha);
    ellipse(this.x + 10, this.y + 25, 7);
  }

}

function keyTyped() {
  if (key === 'a') {
    motion = "water";
  }else if (key === 's') {
    motion = "move";
  }
}

  function keyPressed() {
    if (motion === "move") {
      if (keyCode === UP_ARROW){
        if (ground === platformY1 || ground === platformY2 || ground === platformY3 || ground === platformY4 || ground === platformY5){
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
  rectMode(CORNER);
  platformY2 += d2;
  if (platformY2 > height || platformY2 < 0) {
    d2 *= -1;
  }
  rect(platformX2,platformY2,pWidth,pHeight);
}

function movingPlatforms3() {
  platformY3 += d3;
  if (platformY3 > height || platformY3 < 0) {
    d3 *= -1;
  }
  rect(platformX3,platformY3,pWidth,pHeight);
}

function movingPlatforms4() {
  platformY4 += d4;
  if (platformY4 > height || platformY4 < 0) {
    d4 *= -1;
  }
  rect(platformX4,platformY4,pWidth,pHeight);
}

function movingPlatforms5() {
  platformY5 += d5;
  if (platformY5 > height || platformY5 < 0) {
    d5 *= -1;
  }
  rect(platformX5,platformY5,pWidth,pHeight);
}



function timeLeft() {
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width/2, 100);

  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer === 0){
    state = "gameOver";
    timer = 100;
  }
  if (state === "winner") {
    timer = 100
  }
}

function createAvatar() {
  image(water,initialX - 20,initialY - 5,length,length);
  fill(255);
  yVelocity += yAcceleration;
  yVelocity += gravity;
  initialY += yVelocity;

  if (initialY > windowHeight) {
    state = "gameOver";
    initialX = 170;
    initialY = height/2;
  }

  yAcceleration = 0;
  if (initialY + length >= ground) {
    initialY = ground - length - 1; 
    yVelocity = 0;
  }
  
  if (initialX>platformX1-37 && initialX<platformX1+pWidth  && initialY<platformY1) {
    ground = platformY1;
  }
  else if (initialX>platformX2-37 && initialX<platformX2+pWidth && initialY<platformY2) {
    ground = platformY2;
  }
  else if (initialX>platformX3-37 && initialX<platformX3+pWidth && initialY<platformY3) {
    ground = platformY3;
  }
  else if (initialX>platformX4-37 && initialX<platformX4+pWidth && initialY<platformY4) {
    ground = platformY4;
  }
  else if (initialX>platformX5-37 && initialX<platformX5+pWidth && initialY<platformY5) {
    ground = platformY5;
  }else{
    ground += 5;
  }
}

function commandControls() {
  if (motion === "water") {
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
    if (limitx > -30) {
      if (keyIsDown(LEFT_ARROW)) {
        initialAx -= 0.01;
        limitx -= 1;
      }
    }
    if (limitx < 20) {
      if (keyIsDown(RIGHT_ARROW)) {
        initialAx += 0.01;
        limitx += 1;
      }
    }
    
  }else if (motion === "move") {
    updateParticles(particles, initialX,initialY,initialAx, initialAy);
    updateParticles(particles, initialX,initialY,initialAx + 0.05, initialAy);
    
    if (keyIsDown(LEFT_ARROW)) {
      initialX -= 2;
      
    }
    if (keyIsDown(RIGHT_ARROW)) {
      initialX += 4;
      
    }
  }
}

function menu() {
  rectMode(CENTER);
  fill(255);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Start",width/2,height/2 -100);
}

function checkButtonClick() {
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
      state = "gameplay";
    }
    if (mouseX > width/2 -200 && mouseX < width/2 + 200 && mouseY > height/2-75  && mouseY < height/2 + 75 && state === "gameOver") {
      state = "gameplay";
    }
    if (mouseX > width/2 -200 && mouseX < width/2 + 200 && mouseY > height/2-75  && mouseY < height/2 + 75 && state === "winner") {
      state = "gameplay";
    }
  }
}

function gameOver() {
  rectMode(CORNER);
  fill(255);
  rect(width/2 -200, height/2-75 , 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Game Over",width/2,height/2-250);
  text("Play Again",width/2,height/2);
}

function winner() {
  rectMode(CORNER);
  fill(255);
  rect(width/2 -200, height/2-75 , 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Winner",width/2,height/2-250);
  text("Play Again",width/2,height/2);
}

function createBoss(){
  image(fire,bossX,bossY,bossSize,bossSize);
  if (bossSize < 200){
    state = "winner"
    bossSize = 200;
    bossX = 800;
    bossY = 500;
  }
}
