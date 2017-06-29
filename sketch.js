var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX,mouseY));
}

function mouseClicked(){
  for (var i = bubbles.length-1; i>=0; i--) {
    bubbles[i].clicked();
  }
}

function keyPressed(){
  bubbles.splice(0,bubbles.length);
}
