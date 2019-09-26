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

let state = 'menu';

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  dx = random(-15, 15);
  dy = random(-15, 15);
}

function draw() {
  background(255);

  if (state === 'menu') {
    showMenu();
    checkIfButtonClicked();
  }
  

  if (mode === "circle") {
    displayCircle();
    moveShape();
  }
  if (mode === "rectangle") {
    displayRectangle();
    moveShape();
  }
}


function showMenu() {
  rectMode(CENTER);
  fill(255,0,0,125);
  rect(width/2,height/2 - 100, 200,75);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text('rectangle', width/2, height/2 - 100);


  fill(255,0,0,125);
  rect(width/2,height/2 + 100, 200,75);
  fill(0);
  text('circle', width/2, height/2 + 100);
}

function checkIfButtonClicked() {
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 -75 && moouseY < height/2 + 75){
      state = 'rectangle';
    }
  }
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 + 100 - 75 && moouseY < height/2 + 100 + 75){
      state = 'circle';
    }
  }
}




function windowResized() {
  setup();
}

function moveShape() {
  // move
  x += dx;
  y += dy;
}

function displayCircle() {
  // bounce if needed
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;
  }

  if (y > height - radius/2 || y < 0 + radius/2) {
    dy *= -1;
  }

  fill(0);
  circle(x, y, radius);
}

function displayRectangle() {
  // bounce if needed
  if (x > width - rectSize || x < 0) {
    dx *= -1;
  }

  if (y > height - rectSize || y < 0) {
    dy *= -1;
  }

  fill(0);
  rect(x, y, rectSize, rectSize);
}
