// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

class Attractor {

  constructor(x, y, m) {
    this.pos = createVector(x,y);
    this.mass = m;
    this.r = sqrt(this.mass);
    this.color = {r: 255, g: 0, b: 100}
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 6.674e-2;
    let strength = G * (this.mass * mover.mass) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }

  changeColor(color){
    this.color = color
  }
}
