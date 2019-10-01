// line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sans;
let filtered;

function preload() {
  sans = loadImage("assets/download.png")
  filtered = grayScale(sans);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220)

  imageMode(CENTER);
  image(filtered,mouseX,mouseY);
  
  
}

function grayScale(sourceImage) {
  let img = createImage(sourceImage.width,sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++); {
      let p = sourceImage.get(x,y);


      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b)/3;

      img.set(x, y, color(average,average,average));
    }
  }

  img.upatePixels();
  return img;
}
