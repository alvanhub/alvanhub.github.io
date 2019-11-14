// line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let rows = 30;
let cols = 30;
let playerX = 15;
let playerY = 15;
let yVelocity = 1;
let xVelocity = 0;
let speed = 12;
let axis = "vertical";
let state = "start screen";
let alive = "alive";
let south;
let north;
let east;
let west;
let enemy;





function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  
  grid = createEmptyGrid(cols, rows);
  for (let x = 0; x < cols; x++) {
    grid[0][x] = 3;
    grid[29][x]= 3;
  }
  for (let y = 0; y < rows; y++) {
    grid[y][0] = 3;
    grid[y][29] = 3;
  }
  grid[playerY][playerX] = 1;
  enemy1 = new Cycle(15,1);
  enemy2 = new Cycle(15,5);
}


function draw() {
  if (state === "start screen") {
    background(0);
    menu();
    checkButtonClick();
  }

  if (state === "go"){
    background(220);
    
    displayGrid(grid, rows, cols);

    if (frameCount % speed === 0) {
      handleKey();
    }

    if (frameCount % 10 === 0) {
      enemy1.update();
      enemy1.move();
      enemy1.display();
      
    }
}
if(state === "over") {
  displayGrid(grid, rows, cols);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        grid[y][x] = 0;
      }
    }
  }
}
if(alive === "dead") {
  enemy1.update();
  enemy1.move();
  enemy1.display();
  displayGrid(grid, rows, cols);
}
  if (keyIsDown(LEFT_ARROW)){
    speed = 15;
  }else{
    speed = 20;
  }
}



function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function handleKey() {
  
  if (key === "s") {
    if (axis === "horizontal"){
      yVelocity = 1;
      xVelocity = 0;
    }
    axis = "vertical";
  }
  if (key === "d") {
    if (axis === "vertical"){
      yVelocity = 0;
      xVelocity = 1;
    }
    axis = "horizontal";
  }
  if (key === "a") {
    if (axis === "vertical"){
      yVelocity = 0;
      xVelocity = -1;
    }
    axis = "horizontal";
  }
  if (key === "w") {
    if (axis === "horizontal"){
      yVelocity = -1;
      xVelocity = 0;
    }
    axis = "vertical";
  }
  
  if (alive !== "dead"){
    playerY += yVelocity;
    playerX += xVelocity;
  }

  if (grid[playerY][playerX] === 1 && alive !== "dead"|| grid[playerY][playerX] === 2 && alive !== "dead" || grid[playerY][playerX] === 3 && alive !== "dead"){
    state = "over";
  }
  else{
    grid[playerY][playerX] = 1;
  }


  

}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(0);
        stroke(0)
      }
      else if(grid[y][x] === 1) {
        fill(51,171,249);
        stroke(51,171,249);
      }
      else if(grid[y][x] === 2){
        fill(255,165,0);
        stroke(255,165,0);
      }
      else if(grid[y][x] === 3){
        fill(64,224,208);
        stroke(64,224,208);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}



class Cycle {
  constructor(x,y){
    this.cycleX = x;
    this.cycleY = y;
    this.xVel = 0;
    this.yVel = 1;
    this.direction = "south";
    
  }

  setup() {
    grid[this.cycleY][this.cycleX] = 2;
  }

  update() {
    let clear = true;
    west = grid[this.cycleY][this.cycleX-1];
    south = grid[this.cycleY+1][this.cycleX];
    north = grid[this.cycleY-1][this.cycleX];
    east = grid[this.cycleY][this.cycleX+1];

    if (this.direction === "south"){
      if(south === 1|| west === 1|| east === 1 || south === 2|| west === 2|| east === 2 || south === 3|| west === 3|| east === 3 ) {
        clear = !clear;
      }else if(this.cycleY < 1) {
        clear = !clear;
      }
    }
    if (this.direction === "north"){
      if(north === 1|| west === 1|| east === 1 || north === 2|| west === 2|| east === 2 || north === 3|| west === 3|| east === 3 ) {
        clear = !clear;
      }else if(this.cycleY > 29) {
        clear = !clear;
      }
    }
    if (this.direction === "east"){
      if(south === 1|| north === 1|| east === 1 || south === 2|| north === 2|| east === 2 || south === 3|| north === 3|| east === 3 ) {
        clear = !clear;
      }else if(this.cycleX > 29) {
        clear = !clear;
      }
    }
    if (this.direction === "west"){
      if(south === 1|| west === 1|| north === 1 || south === 2|| west === 2|| north === 2 || south === 3|| west === 3|| north === 3) {
        clear = !clear;
      }else if(this.cycleY < 1) {
        clear = !clear;
      }
    }


    if (clear) {
      if (this.cycleY < playerY){
        if (this.direction === "north") {
          if (this.cycleX > playerX){
            this.direction = "west";
          }else{
            this.direction = "east";
          }
        }else{
          this.direction = "south";
        }
      }else if (this.cycleY > playerY){
        if (this.direction === "south"){
          if (this.cycleX > playerX){
            this.direction = "west";
          }else{
            this.direction = "east";
          }
        }else{
          this.direction = "north"
        }
      }else if(this.cycleY === playerY) {
        if (this.cycleX > playerX){
          this.direction = "west";
        }else{
          this.direction = "east";
        }
      }
    }

    if (!clear) {
      if (this.direction === "south") {
        if (south === 1 || south === 2 || south === 3) {
          if (west === 0) {
            this.direction = "west";
          }else if (east === 0){
            this.direction = "east";
          }else{
            alive = "dead";
            this.direction = "none";
          }
        }else if (west !== 0 || east !== 0 ) {
          this.direction = "south";
        }
      }

      else if (this.direction === "north") {
        if (north === 1 || north === 2 || north === 3) {
          if (west === 0) {
            this.direction = "west";
          }else if (east === 0){
            this.direction = "east";
          }else{
            alive = "dead";
            this.direction = "none";
          }
        }else if (west !== 0 || east !== 0 ) {
          this.direction = "north";
        }
      }

      else if (this.direction === "east") {
        if (east === 1 || east === 2 || east === 3) {
          if (south === 0) {
            this.direction = "south";
          }else if (north === 0){
            this.direction = "north";
          }else{
            alive = "dead";
            this.direction = "none";
          }
        }else if (north !== 0 || south !== 0) {
          this.direction = "east";
        }
      }

      else if (this.direction === "west") {
        if (west === 1 || west === 2 || west === 3) {
          if (south === 0) {
            this.direction = "south";
          }else if (north === 0){
            this.direction = "north";
          }else{
            alive = "dead";
            this.direction = "none";
          }
        }else if (north !== 0 || south !== 0) {
          this.direction = "west";
        }
      }
    }

    if(alive === "dead") {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y][x] === 2) {
            grid[y][x] = 0;
          }
        }
      }
    }
  }

  move() {
    if (this.direction === "south"){
      this.xVel= 0;
      this.yVel = 1;
    }
    if (this.direction === "north"){
      this.xVel= 0;
      this.yVel = -1;
    }
    if (this.direction === "east"){
      this.xVel= 1;
      this.yVel = 0;
    }
    if (this.direction === "west"){
      this.xVel= -1;
      this.yVel = 0;
    }
    if (this.direction === "none"){
      this.xVel= 0;
      this.yVel = 0;
    }
    
    this.cycleX += this.xVel;
    this.cycleY += this.yVel;

  }

  display() {
    if (alive === "alive"){
      grid[this.cycleY][this.cycleX] = 2;
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
      state = "go";
    }
  }
}



