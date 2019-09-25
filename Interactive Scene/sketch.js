// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let coordx;
let coordy;
let a;
let pos = 1;
  
  let movey;
  let movex;
  let speed;


let trail = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
  coordx = width/2;
  coordy = height/2;
  speed = 0;
  
  

}


  



function draw() {
  
  

  push();
  translate(coordx, coordy);
  background(220);
  
   let position = {
      x : coordx,
      y : coordy
    };
  trail.push(position);
  
  a = atan2(mouseY - coordy, mouseX - coordx)
  rotate(a);
  
  
  rect(-50,-50,100,100);

 
   
  if (keyIsDown(LEFT_ARROW)){
    movex = speed*(cos(a));
    movey = speed*(sin(a));
     
    coordx += movex;
    coordy += movey;
    
    if (speed < 15){
      speed += 0.2;
    }
  }
     
   
    else {
      movex = speed*(cos(a));
      movey = speed*(sin(a));
  
      coordx += movex;
      coordy += movey;
      
      if (speed <= 0) {
        speed += 0.2;
      }
      speed -= 0.2;
  

  }
  
  pop();
  

  
  beginShape();
  strokeWeight(pos)
  stroke(0);
  for(i =0; i < trail.length; i++) {
    let pos = trail[i]
    noFill()
    vertex(pos.x,pos.y);
    endShape()
  }
  
  if (trail.length > 50) {
    trail.splice(0,1);
  }
  
  
}

function mouseWheel(event) {
  
  
  if (event.delta > 0) {
    pos += 1;
  }
  else {
    pos -= 1;
  }

  
  
  return false;
}
