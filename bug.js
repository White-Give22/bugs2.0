function Bug(x,y) {

	this.x = x;
	this.y = y;
  
	
	this.display = function() {
		
     push();

  translate(this.x,this.y);
 // rotate(-QUARTER_PI+random(0,PI)/5);
  stroke(127);
  fill('#d02525'); 

  ellipse(0,6,12,24);
  fill(120,70);

  beginShape();
      strokeWeight(2)
 line(width*-0.008,height*0,width*0.007,height*0); 
line(width*0,height*0,width*0,height*0.04);
line(width*0.02,height*-0.065,width*0.015,height*-0.05);
line(width*-0.02,height*-0.065,width*-0.015,height*-0.05);
  endShape();
 
  pop();
  
  
	};
	
  this.clicked = function() {
		
	};
  


	
   this.update = function() {
    fill(255);
    noStroke();
   
		this.x = this.x + random(-4,4);
		this.y = this.y + random(-4,4);
	};
  
  this.isNear = function () {
    var d = dist(mouseX, mouseY, this.x,this.y);
    if (d < 20) {
      return true;
    } else {
      return false;
    }
  };
    
}