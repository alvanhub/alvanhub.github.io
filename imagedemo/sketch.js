// line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let it;
let scalar = 1;

function preload(){
   it = loadImage("assets/it.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
  
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02;
    }
    else if(keyCode === DOWN_ARROW) {
      scalar /= 1.02;
    }
  }
  imageMode(CENTER)
  image(it, mouseX, mouseY, it.width*scalar,it.height*scalar)
}
