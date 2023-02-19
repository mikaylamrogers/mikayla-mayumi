// CLICK ANYWHERE ON THE SCREEN!

let eyes = []; 
let noses = [];
let mouths = [];

function preload() {
  eyeImg = loadImage('eye.png');
  noseImg = loadImage('nose.png');
  mouthImg = loadImage('mouth.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  eye = new Eye(mouseX, mouseY, 200);
  eyes.push(eye);
  nose = new Nose(mouseX, mouseY, 200);
  noses.push(nose);
  mouth = new Mouth(mouseX, mouseY, 200);
  mouths.push(mouth);
}

function draw() {
  for(let i = 0; i < eyes.length; i++) {
    eyes[i].move();
    eyes[i].show();
  }
  
  for(let i = 0; i < noses.length; i++) {
    noses[i].move();
    noses[i].show();
  }
  
  for(let i = 0; i < mouths.length; i++) {
    mouths[i].move();
    mouths[i].show();
  }
}

class Eye {
    constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(2, -2);
    this.y = this.y + random(5, -5);
    this.r = this.r + random(10, -10);
  }
  
  show() {
    image(eyeImg, this.x * 1.5, this.y, 200);
  }
}

class Nose {
    constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(3, -3);
    this.y = this.y + random(8, -8);
    this.r = this.r + random(2, -2);
  }
  
  show() {
    image(noseImg, this.x, this.y, 200);
  }
}

class Mouth {
    constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(10, -10);
    this.y = this.y + random(2, -2);
    this.r = this.r + random(10, -10);
  }
  
  show() {
    image(mouthImg, this.x, this.y * 2.5, 200);
  }
}




