function setup() {

	var canvas = createCanvas(window.innerWidth * 1.0, window.innerHeight * 1.0);

	// Move the canvas so it's inside our <div id="canvas-container">.
	canvas.parent('canvas-container');

	//Setup variables for custom sketch. Move your setup code into customSetup function below
	customSetup();

	resize();
	createBackground();
}


function windowResized() {
	resize();
	createBackground();
}


function createBackground(){
	background(255)
}

function resize(){

	var w = select('#canvas-container').width;
	var h = select('#canvas-container').height;

	console.log(w + " : " + h);

	resizeCanvas(w, h);
}

function outline(){
	noFill();
	// fill(55);
	strokeWeight(1);
	stroke(0);
	// noStroke()
	rect(0,0,width-1, height-1);
}





// Modify above at your own risk
// Modify below freely

////////////////////
// DEFAULT SKETCH //
////////////////////


function customSetup(){
	background(255);
}

function draw(){
	background(255)
	strokeWeight(75)
	for(var x = 0; x < width*1.2; x += 90){
		for(var y = 0; y < height*1.2; y += 90){
			stroke(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 127, 200)
			line(x, y, lerp(x, mouseX, 0.05), lerp(y, mouseY, 0.05))
		}
	}
//	outline();
}
