// sketch2.js

function setup() {
  const headerHeight = document.querySelector('header').offsetHeight;
  const cnv = createCanvas(windowWidth, windowHeight - headerHeight);
  cnv.parent('p5-container');
  background(0);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(random(width), random(height), random(width), random(height));
}

function windowResized() {
  const headerHeight = document.querySelector('header').offsetHeight;
  resizeCanvas(windowWidth, windowHeight - headerHeight);
}
