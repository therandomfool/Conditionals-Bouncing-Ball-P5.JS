var x = 0;
let speed = 3;
let y = 450
let bg = 0;
let br = 0;
let bb = 0;


function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(br,bg, bb);
  stroke(255);
  strokeWeight(4);
  let r = random(255);
  let g = random(255);
  let b = random(255);


  if (x % width ==0){

    bg = random(255);
    br = random(255);
    bb = random(255);
  }

  // fill(r, g, b, `0`+o);


  ellipse(x, y, 100, 100);


  if (x + 50 > width) {
    speed -= 3;
    fill(r, g, b);
    // background(bg);
    
  } else if (x - 50 < 1) {
    speed += 3;
    fill(r, g, b);
    // background(bg);
    
  }

  x += speed;
}