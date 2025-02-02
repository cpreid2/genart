// sketch1.js

function setup() {
  const headerHeight = document.querySelector('header').offsetHeight;
  const cnv = createCanvas(windowWidth, windowHeight - headerHeight);
  cnv.parent('p5-container');
}

function draw() {
  background(30);
  fill(200, 100, 100);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  const headerHeight = document.querySelector('header').offsetHeight;
  resizeCanvas(windowWidth, windowHeight - headerHeight);
}
