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
let cycleY = 5;
let cycleX = 5;
let speed = 20;
let direction = "vertical"
let oldPositions;
let state = "go"

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[playerY][playerX] = 1;
  grid[cycleY][cycleX] = 2;
}

function draw() {
  background(220);
  if (state === "go"){
  displayGrid(grid, rows, cols);
  if (frameCount % speed === 0) {
    handleKey();
  }
}
  if (keyIsDown(LEFT_ARROW)){
    speed = 10;
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
    if (direction === "horizontal"){
      yVelocity = 1;
      xVelocity = 0;
    }
    direction = "vertical";
  }
  if (key === "d") {
    if (direction === "vertical"){
      yVelocity = 0;
      xVelocity = 1;
    }
    direction = "horizontal";
  }
  if (key === "a") {
    if (direction === "vertical"){
      yVelocity = 0;
      xVelocity = -1;
    }
    direction = "horizontal";
  }
  if (key === "w") {
    if (direction === "horizontal"){
      yVelocity = -1;
      xVelocity = 0;
    }
    direction = "vertical";
  }
  
  if (playerX > 0 && playerX < cols  && playerY > 0  && playerY < rows){
    playerY += yVelocity;
    playerX += xVelocity;
  }

  // put player back into gri
  if (grid[playerY][playerX] === 1){
    state = "over"
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
        fill(255);
      }
      else if(grid[y][x] === 1) {
        fill(0);
      }
      else if(grid[y][x] === 2){
        fill(255,165,0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

// function handleCycle() {
//   let destination = {
//     x = playerX,
//     y = playerY
//   };
//   while(cycleX !== playerX && cycleY !== playerY) {
//     cycleY += 1;
//   }
// }




