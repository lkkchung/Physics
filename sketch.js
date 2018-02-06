let orb = [];
let orbNo = 10;

function setup() {
  createCanvas(400, 400);

	// for (let i = 0; i < orbNo; i++){
	// 	orb[i] = new ball();
	// }

}

function draw() {
  background(0);

	for (let i = 0; i < orb.length; i++){
		orb[i].move();
		orb[i].show();
	}
}

function mousePressed(){
  for (let i = 0; i < orbNo; i++){
    orb[i] = new ball();
  }
}

class ball {
	constructor(){
    this.rad = random(5, 30);

		this.pos = createVector(mouseX, mouseY);
    // this.pos = createVector(random(width), height / 2);
		this.vel  = createVector(random(-25, 25), random(-5, 5));
		this.grav = createVector(0, 0.7);



    this.bounce = random(-0.8, -0.95);

	}

	move() {
		this.pos.add(this.vel);
		this.vel.add(this.grav);

		if (this.pos.y >= height - this.rad/2){
      this.pos.y = height - this.rad/2;
			this.vel.y *= this.bounce;
		}


		if (this.pos.y <= 0 + this.rad/2){
      this.pos.y = 0 + this.rad/2;
			this.vel.y *= this.bounce;
		}

    if (this.pos.x >= width - this.rad/2){
      this.pos.x = width - this.rad/2;
			this.vel.x *= this.bounce;
		}


		if (this.pos.x <= 0 + this.rad/2){
      this.pos.x = 0 + this.rad/2;
			this.vel.x *= this.bounce;
		}
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
	}
}
