// Interactive Assignment
// Alvan Alam
// 12/18/2019
// re-submitted
//
// Extra for Experts:
// I implemented the mouseWheel function using it to change the strokeWeight/the thickness of the shapes trail
// Technically i also used the beginShape() and endShape() functions to make the shapes trail

//variables used to set the shapes coordinates,rotation,stroke weight, and movement
let coordX;
let coordY;

let a;

let pos = 1;
  
let moveY;
let moveX;
let speed;

//an array used to store the shapes path
let trail = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  //variables that set the shapes starting position and starting speed
  coordX = width/2;
  coordY = height/2;
  speed = 0;

}



function draw() {

  push();

  create();

  forward();
  
  pop();

  shapeTrail();
  
}

//mouseWheel function that implements the mouse wheel to change the shapes stroke weight
function mouseWheel(event) {
  if (event.delta > 0) {
    pos += 1;
  }
  else {
    pos -= 1;
  }
  return false;
}

//function that does the math for the shapes movement and controls the shapes movement, increasing the shapes x and y coordinates by the amount neccessary to move it towards the mouse
function forward() {
  if (keyIsDown(UP_ARROW)){
    
    moveX = speed*(cos(a));
    moveY = speed*(sin(a));
     
    coordX += moveX;
    coordY += moveY;
    
    //this part of the code creates acceleration for the shape
    if (speed < 15){
      speed += 0.2;
    }
  }
  
  else {
    moveX = speed*(cos(a));
    moveY = speed*(sin(a));
    
    coordX += moveX;
    coordY += moveY;
    
    //this part of code creates deceleration for the shape
    if (speed <= 0) {
      speed += 0.2;
    }
    speed -= 0.2;
  }
}

//function that creates the shapes trail and controls the trails length
function shapeTrail() {
  beginShape();
  strokeWeight(pos);
  stroke(0);

  //this part of code uses the shapes stored coordinates to create the trail
  for(i=0; i < trail.length; i++) {
    let pos = trail[i];
    noFill();
    vertex(pos.x,pos.y);
    endShape();
  }
  
  if (trail.length > 50) {
    trail.splice(0,1);
  }
}

//function that creates the shapes coordinates and stores them aswell as creating the shapes rotation towards the mouse and the shape itself
function create() {
  translate(coordX, coordY);
  background(220);
  
  let position = {
    x : coordX,
    y : coordY
  };

  trail.push(position);
  
  a = atan2(mouseY - coordY, mouseX - coordX);
  rotate(a);
  
  
  rect(-50,-50,100,100);
}
