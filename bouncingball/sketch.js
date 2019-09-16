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
let radius;
let mode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(-15,15);
  dy = random(-15,15);
  radius = 100;
}

function draw() {
  background(255);
  moveShape()

  if (mode === 1) {

  }

  

  circle(x,y,radius)
  fill(0);
}

function windowResized() {
  setup();
}

function moveShape() {
  x += dx;
  y += dy;
}

function displayCircle() {
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;
  }
  if (y > height - radius/2 || y < 0 + radius/2) {
    dy *= -1;
  }
}
