let startColor;
//I followed the 1hr tutorial on hello.processing.org
//I initially wanted to make a switching/morphing shape between 2 types of A but I was not able to figure that out (I'm still upskilling)
//Instead, I played around with colours and made this animated A with 6 circles, which on click, turns into a fun gradient

let endColor;
let t = 0; 
function setup() {
  createCanvas(400, 400);
  background(0);
  startColor = color(random(255), random(255), random(255));
  endColor = color(random(255), random(255), random(255));
}

function draw() {
  background(0); 
  t += 0.01;
  if (t > 1) {
    t = 0;
    startColor = color(random(255), random(255), random(255));
    endColor = color(random(255), random(255), random(255));
  }
  
  let gradColor = lerpColor(startColor, endColor, t);

  if (mouseIsPressed) {
    fill(gradColor);
    ellipse(200, 100, 80, 80);
    ellipse(150, 200, 80, 80);
    ellipse(250, 200, 80, 80);
    ellipse(100, 300, 80, 80);
    ellipse(200, 300, 80, 80);
    ellipse(300, 300, 80, 80);
  } else {
    fill(255); 
    ellipse(200, 100, 80, 80);
    ellipse(150, 200, 80, 80);
    ellipse(250, 200, 80, 80);
    ellipse(100, 300, 80, 80);
    ellipse(200, 300, 80, 80);
    ellipse(300, 300, 80, 80);
  }
}

//Used a bit of chatgpt to fix the code errors and also am learning more about the lerpcolor function to create a smooth gradient
