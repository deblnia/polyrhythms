function setup() {
  angleMode(DEGREES) 
  createCanvas(300, 300);
}

function draw() {
  background(220);
  fill(0);
  ellipse((frameCount * 2) % width, height / 2, 40, 40);
}
