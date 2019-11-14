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
let logo;
let deathCount = 0;

// function preload(){
//   logo = image("assets/mvtronlogo.png");
// }




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
  enemy1 = new Cycle(5,5,2);
  enemy2 = new Cycle(25,5,4);
  enemy3 = new Cycle(15,5,5);
}


function draw() {
  if (state === "start screen") {
    background(0);
    easyButton();
    hardButton();
    checkButtonClick();
  }

  if (state === "easy mode"){
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

if (state === "hard mode"){
  background(220);
  
  displayGrid(grid, rows, cols);

  if (frameCount % speed === 0) {
    handleKey();
  }

  if (frameCount % 10 === 0) {
    enemy1.update();
    enemy1.move();
    enemy1.display();
    enemy2.update();
    enemy2.move();
    enemy2.display();
    enemy3.update();
    enemy3.move();
    enemy3.display();
  }

  if(deathCount === 3) {
    alive = "dead"
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
  
  
  // put player back into gri
  if (grid[playerY][playerX] === 1 && alive !== "dead"|| grid[playerY][playerX] === 2 && alive !== "dead" || grid[playerY][playerX] === 3 && alive !== "dead" || grid[playerY][playerX] === 4 && alive !== "dead" || grid[playerY][playerX] === 5 && alive !== "dead"){
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
      else if(grid[y][x] === 4){
        fill(255,165,0);
        stroke(255,165,0);
      }
      else if(grid[y][x] === 5){
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
  constructor(x,y,identity){
    this.cycleX = x;
    this.cycleY = y;
    this.xVel = 0;
    this.yVel = 1;
    this.direction = "south";
    this.identity = identity;
    this.live = "live"
    
  }

  setup() {
    grid[this.cycleY][this.cycleX] = identity;
  }

  update() {
    let clear = true;
    west = grid[this.cycleY][this.cycleX-1];
    south = grid[this.cycleY+1][this.cycleX];
    north = grid[this.cycleY-1][this.cycleX];
    east = grid[this.cycleY][this.cycleX+1];

    if (this.direction === "south"){
      if(south === 1|| west === 1|| east === 1 || south === 2|| west === 2|| east === 2 || south === 3|| west === 3|| east === 3 || south === 4|| west === 4|| east === 4 || south === 5|| west === 5|| east === 5) {
        clear = !clear;
      }
    }
    if (this.direction === "north"){
      if(north === 1|| west === 1|| east === 1 || north === 2|| west === 2|| east === 2 || north === 3|| west === 3|| east === 3 || north === 4|| west === 4|| east === 4 || north === 5|| west === 5|| east === 5) {
        clear = !clear;
      }
    }
    if (this.direction === "east"){
      if(south === 1|| north === 1|| east === 1 || south === 2|| north === 2|| east === 2 || south === 3|| north === 3|| east === 3 || south === 4|| north === 4|| east === 4 || south === 5|| north === 5|| east === 5) {
        clear = !clear;
      }
    }
    if (this.direction === "west"){
      if(south === 1|| west === 1|| north === 1 || south === 2|| west === 2|| north === 2 || south === 3|| west === 3|| north === 3 || south === 4|| west === 4|| north === 4 || south === 5|| west === 5|| north === 5) {
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
        if (south === 1 || south === 2 || south === 3 || south === 4 || south === 5) {
          if (west === 0) {
            this.direction = "west";
          }else if (east === 0){
            this.direction = "east";
          }else{
            this.live = "death";
            this.direction = "none";
          }
        }else if (west !== 0 || east !== 0 ) {
          this.direction = "south";
        }
    }

      else if (this.direction === "north") {
        if (north === 1 || north === 2 || north === 3 || north === 4 || north === 5) {
          if (west === 0) {
            this.direction = "west";
          }else if (east === 0){
            this.direction = "east";
          }else{
            this.live = "death";
            this.direction = "none";
          }
        }else if (west !== 0 || east !== 0 ) {
          this.direction = "north";
        }
      }

      else if (this.direction === "east") {
        if (east === 1 || east === 2 || east === 3 || east === 4 || east === 5) {
          if (south === 0) {
            this.direction = "south";
          }else if (north === 0){
            this.direction = "north";
          }else{
            this.live = "death";
            this.direction = "none";
          }
        }else if (north !== 0 || south !== 0) {
          this.direction = "east";
        }
      }

      else if (this.direction === "west") {
        if (west === 1 || west === 2 || west === 3 || west === 4 || west === 5) {
          if (south === 0) {
            this.direction = "south";
          }else if (north === 0){
            this.direction = "north";
          }else{
            this.live = "death";
            this.direction = "none";
          }
        }else if (north !== 0 || south !== 0) {
          this.direction = "west";
        }
      }
    }
    if(this.live === "death") {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y][x] === this.identity) {
            grid[y][x] = 0;
          }
        }
      }
      deathCount += 1;
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
      grid[this.cycleY][this.cycleX] = this.identity;
    }
  }


}

function easyButton() {
  rectMode(CENTER);
  fill(255);
  rect(width/2, height/2 + 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Easy",width/2,height/2 +100);
}

function hardButton() {
  rectMode(CENTER);
  fill(255);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Hard",width/2,height/2 -100);
}

function checkButtonClick() {
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
      state = "easy mode";
    }
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
      state = "hard mode";
    }
  }
}



// function handleCycle() {
//   let clear = true;
//   west = grid[cycleY][cycleX-1];
//   south = grid[cycleY+1][cycleX];
//   north = grid[cycleY-1][cycleX];
//   east = grid[cycleY][cycleX+1];

//   if (direction === "south"){
//     if(south === 1|| west === 1|| east === 1 || south === 2|| west === 2|| east === 2) {
//       clear = !clear;
//     }
//   }
//   if (direction === "north"){
//     if(north === 1|| west === 1|| east === 1 || north === 2|| west === 2|| east === 2) {
//       clear = !clear;
//     }
//   }
//   if (direction === "east"){
//     if(south === 1|| north === 1|| east === 1 || south === 2|| north === 2|| east === 2) {
//       clear = !clear;
//     }
//   }
//   if (direction === "west"){
//     if(south === 1|| west === 1|| north === 1 || south === 2|| west === 2|| north === 2) {
//       clear = !clear;
//     }
//   }


//   if (clear) {
//     if (cycleY < playerY){
//       if (direction === "north") {
//         if (cycleX > playerX){
//           direction = "west";
//         }else{
//           direction = "east";
//         }
//       }else{
//         direction = "south";
//       }
//     }else if (cycleY > playerY){
//       if (direction === "south"){
//         if (cycleX > playerX){
//           direction = "west";
//         }else{
//           direction = "east";
//         }
//       }else{
//         direction = "north"
//       }
//     }else if(cycleY === playerY) {
//       if (cycleX > playerX){
//         direction = "west";
//       }else{
//         direction = "east";
//       }
//     }
//   }

//   if (!clear) {
//     if (direction === "south") {
//       if (south === 1 || south === 2) {
//         if (west === 0) {
//           direction = "west";
//         }else if (east === 0){
//           direction = "east";
//         }else{
//           state = "dead";
//           direction = "none";
//         }
//       }else if (west !== 0 || east !== 0) {
//         direction = "south";
//       }
//     }

//     else if (direction === "north") {
//       if (north === 1 || north === 2 ) {
//         if (west === 0) {
//           direction = "west";
//         }else if (east === 0){
//           direction = "east";
//         }else{
//           state = "over";
//           direction = "none";
//         }
//       }else if (west !== 0 || east !== 0 ) {
//         direction = "north";
//       }
//     }

//     else if (direction === "east") {
//       if (east === 1 || east === 2) {
//         if (south === 0) {
//           direction = "south";
//         }else if (north === 0){
//           direction = "north";
//         }else{
//           state = "over";
//           direction = "none";
//         }
//       }else if (north !== 0 || south !== 0) {
//         direction = "east";
//       }
//     }

//     else if (direction === "west") {
//       if (west === 1 || west === 2) {
//         if (south === 0) {
//           direction = "south";
//         }else if (north === 0){
//           direction = "north";
//         }else{
//           state = "over";
//           direction = "none";
//         }
//       }else if (north !== 0 || south !== 0) {
//         direction = "west";
//       }
//     }

//   }

//   if(state === "over") {
//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         if (grid[y][x] === 2) {
//           grid[y][x] = 0;
//         }
//       }
//     }
//   }
   
//   if (direction === "south"){
//     xVel = 0;
//     yVel = 1;
//   }
//   if (direction === "north"){
//     xVel = 0;
//     yVel = -1;
//   }
//   if (direction === "east"){
//     xVel = 1;
//     yVel = 0;
//   }
//   if (direction === "west"){
//     xVel = -1;
//     yVel = 0;
//   }
//   if (direction === "none"){
//     xVel = 0;
//     yVel = 0;
//   }
  
  
//   cycleX += xVel;
//   cycleY += yVel;

//   if (state === "go"){
//     grid[cycleY][cycleX] = 2;
//   }

// }


