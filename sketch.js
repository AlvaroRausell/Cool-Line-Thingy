var move_jump = 7;
var probability_left = 0.5;
var probability_leftMax = 1;

var probability_leftStep = 0.1;
var oldStep = -1;
var old_prob = -1;
function setup() {
  createCanvas(windowWidth, windowWidth);
  gui = createGui("Options");
  gui.addGlobals("probability_left", "move_jump");
}

function draw() {
  stroke(0);
  strokeWeight(2);
  if (oldStep !== move_jump || old_prob !== probability_left) {
    background(255);
    for (let x = 0; x < width; x += move_jump) {
      for (let y = 0; y < height; y += move_jump) {
        stroke(map(x, 0, width, 0, 0));

        resetMatrix();
        translate(x, y);
        if (random() < probability_left) {
          line(0, 0, move_jump, move_jump);
        } else {
          line(move_jump, 0, 0, move_jump);
        }
      }
    }
    oldStep = move_jump;
    old_prob = probability_left;
  }
}
