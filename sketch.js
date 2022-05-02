let cnv;
var SPIcolor = '#3a7b83';
let state = "title";
let a;
var gui;
var bugs = [];
var t;
var p = false;

function setup() {

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
  background(0);
  angleMode(DEGREES);
 	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(150);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}

	}
switch (state) {
    case "title":
      title();
      break;
      case "lvl1":
    lvl1();
    break;
    case"end":
    end();
    break;
}
  }


function title(){

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
}


function lvl1(){
  background('#c3c6c6');
    push();
  translate(width*0,height*0.2);
  spider();
    pop();
  noCursor();
  lcursor();
  	for (var i = bugs.length - 1; i >= 0; i--){

  bugs[i].update();
	bugs[i].display();
  //if bug.length==0 go to game over screen

      if (state == 'lvl1'){
        if(bugs.length == 1) {
          state ="end";
          console.log('ww');
        }      }
}
    }

function end(){
  background('black');
  spider();
  text('The last bug use the bughole to runaway', width * 0.15, height * 0.3)
  text('Here is reward for you',width *0.3,height*0.8);
  let a = createA('https://theuselessweb.com/', 'Click Me');
a.position(width*0.3,height* 0.8);
}

function lcursor(){
  stroke('white');
  strokeWeight(2);
  line(width*0.5,height*0.751,mouseX,mouseY);
}
function mousePressed() {
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
}
