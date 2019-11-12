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
let cycleX = 5;
let cycleY = 5;
let xVel = 0;
let yVel = 1;
let speed = 20;
let axis = "vertical";
let oldPositions;
let state = "go";
let direction = "south";
let south;
let north;
let east;
let west;



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
  if (frameCount % 10 === 0) {
    handleCycle();
  }
}
if(state === "over") {
  handleKey();
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
  
  if (playerX > 0 && playerX < cols  && playerY > 0  && playerY < rows){
    playerY += yVelocity;
    playerX += xVelocity;
  }

  // put player back into gri
  if (grid[playerY][playerX] === 1){
    state = "over";
  }
  else{
    grid[playerY][playerX] = 1;
  }

  if (state === "over") {
    yVelocity = 0;
    xVelocity = 0;
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
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

 function handleCycle() {
  let clear = true;
  west = grid[cycleY][cycleX-1];
  south = grid[cycleY+1][cycleX];
  north = grid[cycleY-1][cycleX];
  east = grid[cycleY][cycleX+1];

  if (direction === "south"){
    if(south === 1|| west === 1|| east === 1 || south === 2|| west === 2|| east === 2) {
      clear = !clear;
    }
  }
  if (direction === "north"){
    if(north === 1|| west === 1|| east === 1 || north === 2|| west === 2|| east === 2) {
      clear = !clear;
    }
  }
  if (direction === "east"){
    if(south === 1|| north === 1|| east === 1 || south === 2|| north === 2|| east === 2) {
      clear = !clear;
    }
  }
  if (direction === "west"){
    if(south === 1|| west === 1|| north === 1 || south === 2|| west === 2|| north === 2) {
      clear = !clear;
    }
  }


  if (clear) {
    if (cycleY < playerY){
      if (direction === "north") {
        if (cycleX > playerX){
          direction = "west";
        }else{
          direction = "east";
        }
      }else{
        direction = "south";
      }
    }else if (cycleY > playerY){
      if (direction === "south"){
        if (cycleX > playerX){
          direction = "west";
        }else{
          direction = "east";
        }
      }else{
        direction = "north"
      }
    }else if(cycleY === playerY) {
      if (cycleX > playerX){
        direction = "west";
      }else{
        direction = "east";
      }
    }
  }

  if (!clear) {
    if (direction === "south") {
      if (south === 1 || south === 2) {
        if (west === 0) {
          direction = "west";
        }else if (east === 0){
          direction = "east";
        }else{
          state = "over";
          direction = "none";
        }
      }else if (west !== 0 || east !== 0) {
        direction = "south";
      }
    }

    else if (direction === "north") {
      if (north === 1 || north === 2 ) {
        if (west === 0) {
          direction = "west";
        }else if (east === 0){
          direction = "east";
        }else{
          state = "over";
          direction = "none";
        }
      }else if (west !== 0 || east !== 0 ) {
        direction = "north";
      }
    }

    else if (direction === "east") {
      if (east === 1 || east === 2) {
        if (south === 0) {
          direction = "south";
        }else if (north === 0){
          direction = "north";
        }else{
          state = "over";
          direction = "none";
        }
      }else if (north !== 0 || south !== 0) {
        direction = "east";
      }
    }

    else if (direction === "west") {
      if (west === 1 || west === 2) {
        if (south === 0) {
          direction = "south";
        }else if (north === 0){
          direction = "north";
        }else{
          state = "over";
          direction = "none";
        }
      }else if (north !== 0 || south !== 0) {
        direction = "west";
      }
    }

  }

  if(state === "over") {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (grid[y][x] === 2) {
          grid[y][x] = 0;
        }
      }
    }
  }
   
  if (direction === "south"){
    xVel = 0;
    yVel = 1;
  }
  if (direction === "north"){
    xVel = 0;
    yVel = -1;
  }
  if (direction === "east"){
    xVel = 1;
    yVel = 0;
  }
  if (direction === "west"){
    xVel = -1;
    yVel = 0;
  }
  if (direction === "none"){
    xVel = 0;
    yVel = 0;
  }

  cycleX += xVel;
  cycleY += yVel;

  if (state === "go"){
    grid[cycleY][cycleX] = 2;
  }

}





//  if (front === "open"){
//    if (cycleY < playerY){
//      cycleY += 1;
//     }
//     else if (cycleY > playerY){
//       cycleY -= 1;
//     }
//     else if (cycleY === playerY){
//       if (cycleX < playerX){
//         cycleX += 1;
//       }else{
//         cycleX -= 1;
//     }
//   }
// }
// if (grid[cycleY][cycleX] === 1){
//   cycleY += 1;
//   grid[cycleY][cycleX] = 2;
// }
// else{
//   grid[cycleY][cycleX] = 2;
