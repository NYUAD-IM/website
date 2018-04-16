var canvas_width = $('#canvas-container').width();
var canvas_height = $('#canvas-container').height();
var radius;
var noise_start = 0;
var inc = 0.1;

var yoff = 0.0;

var c_white;
var c_transparent;
var Y_AXIS = 1;
var X_AXIS = 2;

// setup

function setup() {

	console.log(canvas_width,canvas_height);
	c_white = color(255,255,255,255);
	c_transparent = color(0,0,0,0);
	myCanvas = createCanvas(canvas_width , canvas_height);
  myCanvas.parent('canvas-container');
  radius = int(dist(canvas_width/2,canvas_height/2,0,0));

  draw_perspective_lines(25);


  draw_perlin_noise(150,200,200,cos);
  draw_perlin_noise(100,300,50,cos);
  draw_perlin_noise(200,300,240,cos);
	// draw_perlin_noise(200,300,240,cos);
    // rectMode(CENTER);
  fill(0);
  rect(0,canvas_height/2+20,canvas_width,2);

	setGradient(0, height/2 + 20, width, height/2, c_white, c_transparent, Y_AXIS);
  // rectMode(CENTER);
  // rect(canvas_width/2,canvas_height/2-80,canvas_width,200);
}

// draw

function draw() {
  // background(255,255,0);
  // draw_perspective_lines(30);
	// draw_perlin_noise(200,300,240,cos,noise_start);
	noise_start += inc;
}

function draw_perspective_lines(num){
  let step = PI/num;
  let y_step = canvas_height/2;
  let y = canvas_height;
  let a = 0.0;
  for(let i = 0; i < num+1;i++){
    line(canvas_width/2, canvas_height/2, canvas_width/2 + cos(a) * radius, canvas_height/2 + sin(a) * radius);
    a += step;
  }
};

// this function draws perlin noise

function draw_perlin_noise(ydipmin,ydipmax,col,sine_func,n_start = 0){
  beginShape();
  fill(col);
  noStroke();

  var xoff = 0;       // Option #1: 2D Noise
  var yoff = xoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= canvas_width + 10; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    var n = map(noise(xoff, yoff), 0, 1, -50,50);

		var s = map(sine_func(xoff),-1,1,ydipmax,ydipmin);
		// console.log(sine_func(xoff));
		// var n = map(noise(xoff + n_start),0,1,50,-50);
		// var n = 0;

		var y = n + s;

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  };
  // increment y dimension for noise
  yoff += 0.01;
  vertex(canvas_width, canvas_height/2 + 20);
  vertex(0, canvas_height/2 + 20);
  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
