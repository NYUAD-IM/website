
var g_background_color = 0;

var g_transition = true;

//sketch array global vars
var g_num_of_sketches = 3;
var g_sketch_array_counter = 0;

// setup

function setup() {
  // create create
	myCanvas = createCanvas(g_width , g_height*0.95);
  myCanvas.parent('p5_container');
}

// draw

function draw() {
  if(g_sketch_array_counter === 0){
    sketch_01.run();
  }else if(g_sketch_array_counter === 1){
    sketch_02.run();
		sketch_01.reset();
  }else if(g_sketch_array_counter === 2){
    sketch_03.run();
  }
}

// key presses

function keyPressed() {
  if(g_sketch_array_counter === 2){
    sketch_03.key_press();
  }
}
