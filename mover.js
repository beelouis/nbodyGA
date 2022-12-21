// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

class Mover {
  constructor(x, y, m, vx, vy, mag) {
    this.pos = createVector(x, y);

    this.vx = vx;
    this.vy = vy;
    this.mag = mag
    this.vel = createVector(this.vx, this.vy);
    this.vel.mult(this.mag);

    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass);

    this.color = {r: 250, g: 100, b: 250};
    this.crash = false;
  }

  applyForce(force) {
    if (!this.crash){
      let f = p5.Vector.div(force, this.mass);
      this.acc.add(f);
    }
  }

  update() {
    if (!this.crash){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }
  }

  show() {
    if (!this.crash){
      fill(this.color.r, this.color.g, this.color.b);
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
  }

  changeColor(color){
    this.color = color
  }
}
