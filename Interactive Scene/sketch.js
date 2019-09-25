// Interactive Assignment
// Alva Alam
// 9/25/2019
//
// Extra for Experts:
// I implemented the mouseWheel function using it to change the strokeWeight/the thickness of the shapes trail
// Technically i also used the beginShape() and endShape() functions to make the shapes trail

//variables used to set the shapes coordinates,rotation,stroke weight, and movement
let coordx;
let coordy;

let a;

let pos = 1;
  
  let movey;
  let movex;
  let speed;

//an array used to store the shapes path
let trail = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  //variables that set the shapes starting position and starting speed
  coordx = width/2;
  coordy = height/2;
  speed = 0;

}



function draw() {

  push();

  create();

  Forward();
  
  pop();

  Trail();
  
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
function Forward() {
  if (keyIsDown(UP_ARROW)){

    movex = speed*(cos(a));
    movey = speed*(sin(a));
     
    coordx += movex;
    coordy += movey;
    
    //this part of the code creates acceleration for the shape
    if (speed < 15){
      speed += 0.2;
    }
  }
     
   
    else {
      movex = speed*(cos(a));
      movey = speed*(sin(a));
  
      coordx += movex;
      coordy += movey;
      
      //this part of code creates deceleration for the shape
      if (speed <= 0) {
        speed += 0.2;
      }
      speed -= 0.2;
  }
}

//function that creates the shapes trail and controls the trails length
function Trail() {
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
  translate(coordx, coordy);
  background(220);
  
   let position = {
      x : coordx,
      y : coordy
    };
  trail.push(position);
  
  a = atan2(mouseY - coordy, mouseX - coordx);
  rotate(a);
  
  
  rect(-50,-50,100,100);
}
