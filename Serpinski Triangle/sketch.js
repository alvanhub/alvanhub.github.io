// Grid based assignment
// Alvan Alam
// 13/11/2019
//
// Extra for Experts:
// I implemented objects aswell as an enemy AI into my game

// all variables used in my code


let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 600},
  {x: 700, y: 700}
];

let depth = 1;


function setup() {
 createCanvas(windowWidth, windowHeight)
}


function draw() {
 background(220);
 sierpinski(triangleVertices, depth);
}


function sierpinski(points, level) {
  triangle(points[0].x, points[0].y,
          points[1].x, points[1].y,
          points[2].x, points[2].y);

  if (level > 0){
    sierpinski([points[0],
      getMidPoint(points[0],points[1]),
      getMidPoint(points[0],points[2])],
      level - 1)

    sierpinski([points[1],
        getMidPoint(points[0],points[1]),
        getMidPoint(points[1],points[2])],
        level - 1)
  }
}

function getMidPoint(point1,point2) {
  let midX = (point1.y +point2.x);
  let midY = (point1.y +point2.y);
  return {x: midX, y: midY};

}
