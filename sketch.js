let cnv;
var SPIcolor = '#467491';
let state = "title";
let a;
var gui;
var bugs = [];
var t;
var p = false;
let bg;
let bgtxt = "Due to developers facing bugs regularly,\nresearchers explored a way that will clear the bugs\neasily. After many years of research,\n they invented a robotic spider.\n You are now viewing the invention of spider\n known as Bao Zi.";
let blackscreen = true;
let storyplay = true;
let eggx= 300;
let eggy= 300;
let eggclick = 0;
let bgdelay = 0;
let baozi = "Bao Zi is  born."

function setup() {
  bg = loadImage('asset/b1.jpg');

  cnv = createCanvas(600, 600);
    	frameRate(30);

  sliderRange(0, 90, 1);
  gui = createGui('Choose a color for your spider');
  gui.addGlobals('SPIcolor');
  for (var i = 0; i <15; i++){
	bugs[i] = new Bug(random (0,width),random (0,height));
	}
}



function draw() {
  angleMode(DEGREES);

switch (state) {
    case "title":
      title();
      break;

  case "bgst":
   bgst();
  break;

      case "lvl1":
    lvl1();
    break;

    case "bgst1":
     bgst1();
    break;

    case"end":
    end();
    break;
}
  }


function title(){
background('black');
  wifi();
 spider();
  bstart();
}
function wifi(){
  stroke('#B788BBA0');
  strokeWeight(2);
      line(width*0.5,height*0.3,width*0.5,height*0.55);
  noStroke();
  push();
  fill('#21D1E6AF');
  ellipse(width*0.5,height*0.3,width*0.03);
beginShape();
   vertex(width*0.44,height*0.26);
   vertex(width*0.5,height*0.2);
   vertex(width*0.5,height*0.225);
  endShape();


beginShape();
   vertex(width*0.56,height*0.26);
   vertex(width*0.5,height*0.2);
   vertex(width*0.5,height*0.225);
  endShape();

  beginShape();
   vertex(width*0.4,height*0.22);
   vertex(width*0.5,height*0.14);
   vertex(width*0.5,height*0.165);
  endShape();

beginShape();
   vertex(width*0.6,height*0.22);
   vertex(width*0.5,height*0.14);
   vertex(width*0.5,height*0.165);
  endShape();

    beginShape();
   vertex(width*0.35,height*0.2);
   vertex(width*0.5,height*0.07);
   vertex(width*0.5,height*0.105);
  endShape();

beginShape();
   vertex(width*0.65,height*0.2);
   vertex(width*0.5,height*0.07);
   vertex(width*0.5,height*0.105);
  endShape();

     beginShape();
   vertex(width*0.3,height*0.16);
   vertex(width*0.5,height*0);
   vertex(width*0.5,height*0.045);
  endShape();

beginShape();
   vertex(width*0.7,height*0.16);
   vertex(width*0.5,height*0);
   vertex(width*0.5,height*0.045);
  endShape();
pop();

}
function spider(){
//leg left 1
  stroke(SPIcolor)
  strokeWeight(3);
    line(width*0.46,height*0.56,width*0.5,height*0.6);
    line(width*0.46,height*0.56,width*0.5,height*0.53);
  strokeWeight(2.5);
  ellipse(width*0.5,height*0.53,width*0.015);

//leg left 2
   strokeWeight(3);
    line(width*0.43,height*0.57,width*0.48,height*0.6);
    line(width*0.43,height*0.57,width*0.44,height*0.51);
  strokeWeight(2.5);
  ellipse(width*0.44,height*0.5,width*0.015);

  //leg left 3
   strokeWeight(3);
    line(width*0.447,height*0.63,width*0.48,height*0.6);
    line(width*0.447,height*0.63,width*0.46,height*0.67);
  strokeWeight(2.5);
  ellipse(width*0.46,height*0.67,width*0.015);

// leg left 4
     strokeWeight(3);
    line(width*0.48,height*0.62,width*0.473,height*0.63);
    line(width*0.473,height*0.63,width*0.485,height*0.66);
  strokeWeight(2.5);
  ellipse(width*0.485,height*0.66,width*0.015);

//leg right 1
    strokeWeight(3);
    line(width*0.5,height*0.6,width*0.54,height*0.55);
    line(width*0.54,height*0.55,width*0.5,height*0.49);
    strokeWeight(2.5);
  ellipse(width*0.5,height*0.49,width*0.015);

  //leg right 2
   strokeWeight(3);
    line(width*0.53,height*0.59,width*0.56,height*0.56);
    line(width*0.56,height*0.56,width*0.55,height*0.48);
  strokeWeight(2.5);
  ellipse(width*0.55,height*0.48,width*0.015);

// leg right 3
     strokeWeight(3);
    line(width*0.52,height*0.6,width*0.55,height*0.63);
    line(width*0.55,height*0.63,width*0.54,height*0.68);
  strokeWeight(2.5);
  ellipse(width*0.54,height*0.68,width*0.015);
 // leg right 4
     strokeWeight(3);
    line(width*0.52,height*0.62,width*0.527,height*0.63);
    line(width*0.527,height*0.63,width*0.515,height*0.66);
  strokeWeight(2.5);
  ellipse(width*0.515,height*0.66,width*0.015);





//body
  push()
  noStroke();
  fill(SPIcolor);

  ellipse(width*0.5,height*0.6,width*0.3/5);
 push();
  fill('white');
  ellipse(width*0.5,height*0.6,width*0.24/5);
  pop();
    ellipse(width*0.5,height*0.6,width*0.18/5);
  push();
  fill('white');
  translate(width*0.49,height*0.585);
  ellipse(0,0,width*0.04/5);
  pop();
  rect(width*0.496,height*0.551,width*0.008,width*0.025);
  pop();

}
function bstart(){
  fill(217,217,217);

cursor();
  noStroke();
beginShape();
  vertex(width*0.4,height*0.8);
  vertex(width*0.4,height*0.9);
   vertex(width*0.6,height*0.9);
    vertex(width*0.6,height*0.8);
endShape();
    stroke(SPIcolor)
    textSize(25);
    fill(255, 255, 255);
    text("Start", width * 0.45, height * 0.86);
    rect(width*0.8,height*0.8,60,60);
textSize(20);
text("Story", width * 0.81, height * 0.86);
}


function lvl1(){
  background(bg);
      push();
  translate(width*0,height*0.2);
  spider();
  noCursor();
   pop();

  lcursor();
  	for (var i = bugs.length - 1; i >= 0; i--){

    bugs[i].update();
	bugs[i].display();
  //if bug.length==0 go to game over screen

      if (state == 'lvl1'){
        if(bugs.length == 1) {
          state ="end";
          }
      }
   }
}

function end(){
  noCursor();
  background('black');
    lcursor1();

  spider();
  text('The last bug use the bughole to runaway', width * 0.15, height * 0.3)
  text('Here is reward for you',width *0.3,height*0.8);
  beginShape();
  vertex(width*0.38,height*0.83);
  vertex(width*0.38,height*0.93);
   vertex(width*0.62,height*0.93);
    vertex(width*0.62,height*0.83);
endShape();
  text('Click Me', width * 0.43, height * 0.89);
beginShape();
  vertex(width*0.4,height*0.15);
  vertex(width*0.4,height*0.25);
   vertex(width*0.6,height*0.25);
    vertex(width*0.6,height*0.15);
endShape();

text('Title', width * 0.43, height * 0.21);

}

function lcursor(){
  stroke('white');
  strokeWeight(2);
  line(width*0.5,height*0.751,mouseX,mouseY);
}
function lcursor1(){
  stroke('white');
  strokeWeight(2);
  line(width*0.5,height*0.551,mouseX,mouseY);
}
function mousePressed() {

  if (state == "end"){
      if (mouseX >width*0.4 && mouseX < width*0.6 && mouseY>height* 0.15 && mouseY<height*0.25){
    state = "title";
  }
  }

  if (state == "title") {
    if ( mouseX > width * 0.4 &&  mouseX < width * 0.6 &&  mouseY > height * 0.8 &&  mouseY < height * 0.9) {
      state = "lvl1";
          }

  }
    //console.log("click!");
	for (var i = bugs.length - 1; i >= 0; i--){
    if (bugs[i].isNear()) {
    bugs.splice(i,1);
      p = true;
    }
    else {
      p = false;
    }
}
  if (state == "end"){
      if (mouseX >width*0.38 && mouseX < width*0.62 && mouseY>height* 0.83 && mouseY<height*0.93){
    window.open('https://theuselessweb.com');
  }
  }

  if (state == "title"){
   if (mouseX >width*0.8 && mouseX < width*0.9 && mouseY>height* 0.8 && mouseY<height*0.9){
     state = "bgst";
   }
}

 if (state == "bgst"){
  if ( mouseX > width * 0.4 &&  mouseX < width * 0.6 &&  mouseY > height * 0.8 &&  mouseY < height * 0.9){
    state = "bgst1";
    storyplay = false;
    console.log("click!");
  }
}
if (state == "bgst1"){
 if ( mouseX > width * 0.1 &&  mouseX < width * 0.9 &&  mouseY > height * 0.1 &&  mouseY < height * 0.9){
  eggx = eggx + random(-10,10);
   eggy = eggy + random(-10,10);
   eggclick++;
 }
}

}



function bgst(){
  if (storyplay){

  bgstory();
}
//background('black') ;

  cursor();
   clickb();

}


function bgstory(){
  if (blackscreen){
    background('black');
    blackscreen = false ;
  }
textLeading(50);
typeWriter(bgtxt,0,width*0.2,height*0.2,0.01);

}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function clickb(){
  push();
  fill(217,217,217);
  noStroke();
beginShape();
  vertex(width*0.4,height*0.8);
  vertex(width*0.4,height*0.9);
   vertex(width*0.6,height*0.9);
    vertex(width*0.6,height*0.8);
endShape();
  stroke(SPIcolor)
  textSize(25);
  fill(255, 255, 255);
  text("Continue", width * 0.42, height * 0.86);
  pop();
}

function bgst1(){
 background('lightblue');
 egg();
console.log(bgdelay);
if(eggclick > 10){
  background('white');
  bgdelay++;
}
textSize(30);
text("Click to hatch the egg", width*0.3,height*0.8);
if (bgdelay >10){
  push();
  translate(-300,-400);
  scale(2);
  spider();
  pop();
  stroke('black');
  textSize(25);
  text("Bao Zi is born!!!!!", width*0.35, height *0.8);
}
if (bgdelay > 75){
  state = 'title';
}
}

function egg(){
  noStroke();
  ellipse(eggx,eggy,150,200);
}
