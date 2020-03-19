// BIO 30 Plant Cell Model

let cellWallX = 150;
let cellWallY = 25;
let cellWallW = 650;
let cellWallH = 700;

let cellMembraneX = 160;
let cellMembraneY = 35;
let cellMembraneW = 630;
let cellMembraneH = 680;

let nucleusX = 175
let nucleusY = 275
let nucleusW = 160;
let nucleusH = 165;
let nucleolusX = 210
let nucleolusY = 305
let nucleolusW = 50;
let nucleolusH = 50;
let SERX = 180
let SERY = 165
let SERW = 150;
let SERH = 110;
let RERX = 180
let RERY = 445
let RERW = 150;
let RERH = 80;

let vacuoleX = 340
let vacuoleY = 165
let vacuoleW = 300;
let vacuoleH = 430;

let rib1X = 180
let rib1Y = 150
let rib1W = 10;
let rib1H = 10;
let rib2X = 230
let rib2Y = 130
let rib2W = 10;
let rib2H = 10;
let rib3X = 190
let rib3Y = 110
let rib3W = 10;
let rib3H = 10;
let rib4X = 280
let rib4Y = 145
let rib4W = 10;
let rib4H = 10;
let rib5X = 260
let rib5Y = 115
let rib5W = 10;
let rib5H = 10;

let golgiX = 500
let golgiY = 60
let golgiW = 200;
let golgiH = 100;

let chloro1X = 320
let chloro1Y = 50
let chloro1W = 160;
let chloro1H = 90;

let chloro2X = 200
let chloro2Y = 540
let chloro2W = 90;
let chloro2H = 160;

let chloro3X = 650
let chloro3Y = 170
let chloro3W = 90;
let chloro3H = 150;

let chloro4X = 650
let chloro4Y = 330
let chloro4W = 90;
let chloro4H = 150;

let mito1X = 650
let mito1Y = 490
let mito1W = 90;
let mito1H = 130;

let mito2X = 550
let mito2Y = 610
let mito2W = 130;
let mito2H = 90;

let mito3X = 350
let mito3Y = 610
let mito3W = 130;
let mito3H = 90;

let info = "none";

function setup() {
  createCanvas(windowWidth, windowHeight);

}



function draw() {
  fill(255);
  stroke(0);
  rect(width/2+width/4-100,0,width/4+100,height);
  fill(0);
  textSize(20);
  text("Plant Cell",width/2 - 720,20)
  text("Alvan Alam",width/2 - 720,40)
  text("BIO 30",width/2 - 720,60)
  text("19/03/2020",width/2 - 720,80)
  cell();
  display();
}

function cell() {
  ellipseMode(CORNER);
  noStroke();
  fill(0,102,0);
  rect(cellWallX,cellWallY,cellWallW,cellWallH,40);
  fill(0,255,0);
  rect(cellMembraneX,cellMembraneY,cellMembraneW,cellMembraneH,40);
  fill(229,255,204);
  rect(cellMembraneX+10,cellMembraneY+10,cellMembraneW-20,cellMembraneH-20,40);
  fill(0,0,255);
  ellipse(nucleusX, nucleusY, nucleusW, nucleusH);
  fill(0,0,204);
  ellipse(nucleolusX, nucleolusY, nucleolusW, nucleolusH);



  // rect(SERX, SERY, SERW, SERH);

  noFill();
  stroke(153,204,255);
  strokeWeight(12);
  beginShape(LINES);
  vertex(185,265)
  vertex(320,247);
  vertex(320,240);
  vertex(190,240)
  vertex(250,240)
  vertex(250,220);
  vertex(310,220);
  vertex(310,205);
  endShape();
  ellipse(190,220,130,5);
  ellipse(190,200,130,5);
  ellipse(190,175,130,10);

  noStroke();


  // rect(RERX, RERY, RERW, RERH);

  noFill();
  stroke(153,204,255);
  strokeWeight(12);
  beginShape(LINES);
  vertex(320,515);
  vertex(185,505)
  vertex(185,505)
  vertex(320,497);
  vertex(320,490);
  vertex(190,490)
  vertex(250,490)
  vertex(250,470);
  vertex(310,470);
  vertex(310,455);
  endShape();
  ellipse(190,470,130,5);
  ellipse(190,450,130,5);

  noStroke();
  fill(220);

  // rect(vacuoleX,vacuoleY,vacuoleW,vacuoleH);
  fill(204,229,255);
  ellipse(vacuoleX-10,vacuoleY-15,300,300)
  ellipse(vacuoleX,vacuoleY,300,430)
  ellipse(vacuoleX,vacuoleY+260,200,170)

  fill(0);
  ellipse(rib1X, rib1Y, rib1W, rib1H);
  ellipse(rib2X, rib2Y, rib2W, rib2H);
  ellipse(rib3X, rib3Y, rib3W, rib3H);
  ellipse(rib4X, rib4Y, rib4W, rib4H);
  ellipse(rib5X, rib5Y, rib5W, rib5H);

  fill(220);
  // rect(golgiX, golgiY, golgiW, golgiH);
  fill(255,128,0);
  ellipse(550,70,150,15);
  ellipse(550,85,150,15);
  ellipse(550,100,150,15);
  ellipse(550,115,150,15);
  ellipse(550,130,150,15);
  ellipse(550,145,150,15);
  ellipse(530,70,10,10);
  ellipse(520,90,20,20);
  ellipse(510,80,15,10);
  ellipse(510,125,30,30);
  ellipse(520,115,10,10);

  fill(255,255,102);
  stroke(255);
  strokeWeight(4);
  ellipse(chloro1X,chloro1Y,chloro1W,chloro1H);
  stroke(0,255,0);
  strokeWeight(10);
  beginShape(LINES);
  vertex(360,60)
  vertex(380,60);
  vertex(360,70)
  vertex(380,70);
  vertex(360,80);
  vertex(380,80);
  vertex(360,90);
  vertex(380,90);
  vertex(360,100);
  vertex(380,100);
  vertex(360,110);
  vertex(380,110);
  vertex(360,120);
  vertex(380,120);
  vertex(360,130);
  vertex(380,130);

  vertex(410,60)
  vertex(430,60);
  vertex(410,70)
  vertex(430,70);
  vertex(410,80);
  vertex(430,80);
  vertex(410,90);
  vertex(430,90);
  vertex(410,100);
  vertex(430,100);
  vertex(410,110);
  vertex(430,110);
  vertex(410,120);
  vertex(430,120);
  vertex(410,130);
  vertex(430,130);
  endShape();
  
  fill(255,255,102);
  stroke(255);
  strokeWeight(4);
  ellipse(chloro2X,chloro2Y,chloro2W,chloro2H);
  stroke(0,255,0);
  strokeWeight(10);
  beginShape(LINES);
  vertex(215,570)
  vertex(215,590)
  vertex(225,570)
  vertex(225,590)
  vertex(235,570)
  vertex(235,590)
  vertex(245,570)
  vertex(245,590)
  vertex(255,570)
  vertex(255,590)
  vertex(265,570)
  vertex(265,590)
  vertex(275,570)
  vertex(275,590)

  vertex(215,630)
  vertex(215,650)
  vertex(225,630)
  vertex(225,650)
  vertex(235,630)
  vertex(235,650)
  vertex(245,630)
  vertex(245,650)
  vertex(255,630)
  vertex(255,650)
  vertex(265,630)
  vertex(265,650)
  vertex(275,630)
  vertex(275,650)

  endShape();

  fill(255,255,102);
  stroke(255);
  strokeWeight(4);
  ellipse(chloro3X,chloro3Y,chloro3W,chloro3H);
  stroke(0,255,0);
  strokeWeight(10);
  beginShape(LINES);
  vertex(660,210)
  vertex(660,230)
  vertex(670,210)
  vertex(670,230)
  vertex(680,210)
  vertex(680,230)
  vertex(690,210)
  vertex(690,230)
  vertex(700,210)
  vertex(700,230)
  vertex(710,210)
  vertex(710,230)
  vertex(720,210)
  vertex(720,230)
  vertex(730,210)
  vertex(730,230)

  vertex(660,270)
  vertex(660,290)
  vertex(670,270)
  vertex(670,290)
  vertex(680,270)
  vertex(680,290)
  vertex(690,270)
  vertex(690,290)
  vertex(700,270)
  vertex(700,290)
  vertex(710,270)
  vertex(710,290)
  vertex(720,270)
  vertex(720,290)
  vertex(730,270)
  vertex(730,290)
  endShape();

  fill(255,255,102);
  stroke(255);
  strokeWeight(4);
  ellipse(chloro4X,chloro4Y,chloro4W,chloro4H);
  stroke(0,255,0);
  strokeWeight(10);
  beginShape(LINES);
  vertex(660,370)
  vertex(660,390)
  vertex(670,370)
  vertex(670,390)
  vertex(680,370)
  vertex(680,390)
  vertex(690,370)
  vertex(690,390)
  vertex(700,370)
  vertex(700,390)
  vertex(710,370)
  vertex(710,390)
  vertex(720,370)
  vertex(720,390)
  vertex(730,370)
  vertex(730,390)

  vertex(660,430)
  vertex(660,450)
  vertex(670,430)
  vertex(670,450)
  vertex(680,430)
  vertex(680,450)
  vertex(690,430)
  vertex(690,450)
  vertex(700,430)
  vertex(700,450)
  vertex(710,430)
  vertex(710,450)
  vertex(720,430)
  vertex(720,450)
  vertex(730,430)
  vertex(730,450)
  endShape();

  fill(355,102,102)
  stroke(255);
  strokeWeight(4);
  ellipse(mito1X,mito1Y,mito1W,mito1H);
  stroke(255,128,0);
  strokeWeight(8);
  beginShape(LINES);
  vertex(670,510);
  vertex(720,510);
  vertex(695,510);
  vertex(695,600);
  vertex(670,555);
  vertex(720,555);
  vertex(670,600);
  vertex(720,600);
  endShape();

  stroke(255);
  strokeWeight(4);
  ellipse(mito2X,mito2Y,mito2W,mito2H);
  stroke(255,128,0);
  strokeWeight(8);
  noFill();
  beginShape();
  vertex(570,630)
  vertex(600,690);
  vertex(630,620)
  vertex(660,680)
  endShape();

  fill(355,102,102)
  stroke(255);
  strokeWeight(4);
  ellipse(mito3X,mito3Y,mito3W,mito3H);
  stroke(255,128,0);
  strokeWeight(8);
  noFill();
  beginShape();
  vertex(370,630)
  vertex(400,690);
  vertex(430,620)
  vertex(460,680)
  endShape();
}

function display() {
  if(mouseX > nucleolusX && mouseY > nucleolusY 
    && mouseX < nucleolusX + nucleolusW && mouseY < nucleolusY + nucleolusH) {
      info = "nucleolus"
    }else if(mouseX > nucleusX && mouseY > nucleusY 
      && mouseX < nucleusX + nucleusW && mouseY < nucleusY + nucleusH) {
        info = "nucleus"
    }else if(mouseX > SERX && mouseY > SERY 
      && mouseX < SERX + SERW && mouseY < SERY + SERH) {
        info = "smoother"
    }else if(mouseX > RERX && mouseY > RERY 
      && mouseX < RERX + RERW && mouseY < RERY + RERH) {
        info = "rougher"
    }else if(mouseX > vacuoleX && mouseY > vacuoleY 
      && mouseX < vacuoleX + vacuoleW && mouseY < vacuoleY + vacuoleH) {
        info = "vacuole"
    }else if(mouseX > rib1X && mouseY > rib1Y 
      && mouseX < rib1X + rib1W && mouseY < rib1Y + rib1H) {
        info = "ribosome"
    }else if(mouseX > rib2X && mouseY > rib2Y 
      && mouseX < rib2X + rib2W && mouseY < rib2Y + rib2H) {
        info = "ribosome"
    }else if(mouseX > rib3X && mouseY > rib3Y 
      && mouseX < rib3X + rib3W && mouseY < rib3Y + rib3H) {
        info = "ribosome"
    }else if(mouseX > rib4X && mouseY > rib4Y 
      && mouseX < rib4X + rib4W && mouseY < rib4Y + rib4H) {
        info = "ribosome"
    }else if(mouseX > rib5X && mouseY > rib5Y 
      && mouseX < rib5X + rib5W && mouseY < rib5Y + rib5H) {
        info = "ribosome"
    }else if(mouseX > golgiX && mouseY > golgiY 
      && mouseX < golgiX + golgiW && mouseY < golgiY + golgiH) {
        info = "Golgi"
    }else if(mouseX > chloro1X && mouseY > chloro1Y 
      && mouseX < chloro1X + chloro1W && mouseY < chloro1Y + chloro1H) {
        info = "chloroplast"
    }else if(mouseX > chloro2X && mouseY > chloro2Y 
      && mouseX < chloro2X + chloro2W && mouseY < chloro2Y + chloro2H) {
        info = "chloroplast"
    }else if(mouseX > chloro3X && mouseY > chloro3Y 
      && mouseX < chloro3X + chloro3W && mouseY < chloro3Y + chloro3H) {
        info = "chloroplast"
    }else if(mouseX > chloro4X && mouseY > chloro4Y 
      && mouseX < chloro4X + chloro4W && mouseY < chloro4Y + chloro4H) {
        info = "chloroplast"
    }else if(mouseX > mito1X && mouseY > mito1Y 
      && mouseX < mito1X + mito1W && mouseY < mito1Y + mito1H) {
        info = "mito"
    }else if(mouseX > mito2X && mouseY > mito2Y 
      && mouseX < mito2X + mito2W && mouseY < mito2Y + mito2H) {
        info = "mito"
    }else if(mouseX > mito3X && mouseY > mito3Y 
      && mouseX < mito3X + mito3W && mouseY < mito3Y + mito3H) {
        info = "mito"
    }else if(mouseX > cellMembraneX+10 && mouseY > cellMembraneY+10 
      && mouseX < cellMembraneX + cellMembraneW-20 && mouseY < cellMembraneY + cellMembraneH-20) {
        info = "cytoplasm"
    }else if(mouseX > cellMembraneX && mouseY > cellMembraneY 
      && mouseX < cellMembraneX + cellMembraneW && mouseY < cellMembraneY + cellMembraneH) {
        info = "cell membrane"
    }else if(mouseX > cellWallX && mouseY > cellWallY 
      && mouseX < cellWallX + cellWallW && mouseY < cellWallY + cellWallH) {
        info = "cell wall"
    }
    
    else{
      info = "none";
    }

  textSize(50);
  strokeWeight(1)
  stroke(0);
  fill(0);
  if(info === "none") {
    textSize(20);
    text("move mouse to view organelles",width/2+width/4-75, 40) 
  }else if(info === "nucleolus") {
    text("Nucleolus",width/2+width/4+25, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('The site of ribosome production within the',width/2+width/4-55,160)
    text('nucleus of eukaryotic cells.',width/2+width/4-55,180)
  }else if(info === "nucleus") {
    text("Nucleus",width/2+width/4+25, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('In eukaryotic cells, the central',width/2+width/4-55,160)
    text('membrane-bound organelle that manages',width/2+width/4-55,180)
    text('cellular functions and contains DNA.',width/2+width/4-55,200)
  }else if(info === "smoother") {
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text("Smooth Endoplasmic Reticulum",width/2+width/4, 40) 
    textSize(20);
    text('Highly folded membrane system in',width/2+width/4-55,160)
    text('eukaryotic cells that is the site for protein and',width/2+width/4-55,180)
    text('lipid synthesis. Produces hormones and lipids.',width/2+width/4-55,200)
  }else if(info === "rougher") {
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text("Rough Endoplasmic Reticulum",width/2+width/4, 40) 
    textSize(20);
    text('Highly folded membrane system in',width/2+width/4-55,160)
    text('eukaryotic cells that is the site for protein and',width/2+width/4-55,180)
    text('lipid synthesis. Contains ribosomes.',width/2+width/4-55,200)
  }else if(info === "vacuole") {
    text("Vacuole",width/2+width/4+25, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Membrane-bound vesicle for temporary ',width/2+width/4-55,160)
    text('storage of materials such as food,',width/2+width/4-55,180)
    text('enzymes, and wastes.',width/2+width/4-55,200)
  }else if(info === "ribosome") {
    text("Ribosome",width/2+width/4+25, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Simple cell organelle that helps manufacture',width/2+width/4-55,160)
    text('proteins.',width/2+width/4-55,180)
  }else if(info === "Golgi") {
    text("Golgi Aparatus",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Flattened stack of tubular membranes',width/2+width/4-55,160)
    text('that modifies, sorts, and packages',width/2+width/4-55,180)
    text('proteins into vesicles and transports',width/2+width/4-55,200)
    text('them to other organelles or out of cells',width/2+width/4-55,220)
  }else if(info === "chloroplast") {
    text("Chloroplast",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Double-membrane organelle that captures light',width/2+width/4-80,160)
    text('energy and converts it to chemical energy through ',width/2+width/4-80,180)
    text('photosynthesis.',width/2+width/4-80,200)
  }else if(info === "mito") {
    text("Mitochondria",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Membrane-bound organelle that converts fuel',width/2+width/4-80,160)
    text('into energy that is available to the rest of',width/2+width/4-80,180)
    text('the cell.',width/2+width/4-80,200)
  }else if(info === "cytoplasm") {
    text("Cytoplasm",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('semifluid material inside the cells plasma',width/2+width/4-75,160)
    text('membrane.',width/2+width/4-75,180)
  }else if(info === "cell membrane") {
    text("Cell Membrane",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('Flexible, selectively permeable boundary that',width/2+width/4-80,160)
    text('helps control what enters and leaves the cell. ',width/2+width/4-80,180)
  }else if(info === "cell wall") {
    text("Cell Wall",width/2+width/4, 40) 
    text("Function:",width/2+width/4-75, 110);
    textSize(20);
    text('The rigid barrier that surrounds the outside of',width/2+width/4-80,160)
    text('the plasma membrane, is made of cellulose, and ',width/2+width/4-80,180)
    text('provides support and protection to the cell.',width/2+width/4-80,200)
  }
}