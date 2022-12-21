// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

let movers = [];
let numMovers = 100;
let attractors = [];
let time;


function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < numMovers; i++){
    // this is what the GA will optimise:
    let vx = random(-1, 1);
    let vy = random(-1, 1);
    // angle = random(-TWO_PI, TWO_PI);
    let mag = random(1, 5);

    movers[i] = new Mover(width/2, height/2, 5, vx, vy, mag);
  }

  attractors[0] = new Attractor(100, 200, 100);
  attractors[1] = new Attractor(150, 400, 200);
  attractors[2] = new Attractor(300, 150, 100);
  attractors[3] = new Attractor(450, 400, 200);

  time = 0;

  background(0);
}

function draw() {
  time ++;
  background(0);
  // get mover, iterate over all attractors, and apply attraction to each one
  for (let [index, mover] of movers.entries()){
    for (let attractor of attractors) {
      attractor.attract(mover);
      attractor.show();
      mover.update();

      if ( (mover.pos.dist(attractor.pos) <= mover.r + attractor.r) && !mover.crash){
        mover.crash = true
        console.log(`time lasted ${time}`);
      }
    }
    if (!mover.crash) mover.show();
  }
}
