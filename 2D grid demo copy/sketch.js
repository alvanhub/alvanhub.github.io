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

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  if (frameCount % 10 === 0) {
    handleKey();
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
    yVelocity = 1;
    xVelocity = 0;
  }
  if (key === "d" ) {
    yVelocity = 0;
    xVelocity = 1;
  }
  if (key === "a") {
    yVelocity = 0;
    xVelocity = -1;
  }
  if (key === "w" ) {
    yVelocity = -1;
    xVelocity = 0;
  }
  
  playerY += yVelocity;
  playerX += xVelocity;

  // put player back into grid
  grid[playerY][playerX] = 1;
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
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function update() {
  let nextTurn = createEmptyGrid();

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;

      //loop around the neighbor spots...
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //deal with edge cases
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[y+j][x+i];
          }
        }
      }
      //don't count self as a neighbor
      neighbors -= grid[y][x];

      //apply rules!
      // if(grid[y][x]=== 0){

      // }


      if (grid[y][x] === 1) { //currently dead
        if (neighbors === 1) {
          nextTurn[y-1][x] = 1;
        }
      }
    }
  }
  grid = nextTurn;
}