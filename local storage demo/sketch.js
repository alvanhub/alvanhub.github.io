// Grid based assignment
// Alvan Alam
// 13/11/2019
//
// Extra for Experts:
// I implemented objects aswell as an enemy AI into my game

// all variables used in my code


let numberOfClicks = 0;
let allTimeHighestClicks;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem('highestClicks') !== null) {
    allTimeHighestClicks = getItem('highestClicks')
  }
  else {
    allTimeHighestClicks = 0;
  }
}

function draw() {
  background(220)

  textSize(72);
  fill('black');
  text(numberOfClicks, 50, 100);

  fill('green') 
  text(allTimeHighestClicks, 50, 300)
}

function mousePressed(){
  numberOfClicks++;

  if(numberOfClicks > allTimeHighestClicks) {
    allTimeHighestClicks = numberOfClicks;
    storeItem('highestClicks',allTimeHighestClicks); 
  }
}


