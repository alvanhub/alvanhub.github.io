// Interactive Assignment
// Alva Alam
// 9/25/2019
//
// Extra for Experts:
// I implemented the mouseWheel function using it to change the strokeWeight/the thickness of the shapes trail
// Technically i also used the beginShape() and endShape() functions to make the shapes trail

let canonX;
let canonY;
let canonWidth;
let canonHeight;
let canonAngle;
let bullets  = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  canonX = 75;
  canonY = height - 150;
  canonWidth = 50;
  canonHeight =  125;
  canonAngle = 0;
}



function draw() {
background(220);

displayCanon();
updateBullets();
  
}

function displayCanon() {
  push();
  translate(canonX,canonY);
  canonAngle = atan2(mouseY - canonY,mouseX - canonX);
  rotate(canonAngle);
  rect(-canonHeight/2,-canonWidth/2,canonHeight,canonWidth);
  circle(0,0,canonWidth);
  pop();
}

function mouseClicked() {
  fire();
}

function fire() {
  let thisBullet = {
    x: canonX,
    y: canonY,
    radius: canonWidth,
    angle: canonAngle,
    speed: 20
  };
  bullets.push(thisBullet);

}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x,thisBullet.y,thisBullet.radius)
  }


}


