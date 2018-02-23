function setup() {

	var canvas = createCanvas(window.width * 1.0, window.innerHeight * 1.0);

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
	loadIM();
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

var ballArr = [];

// Ball variables
var numBalls = 40;
var minSize = 10;
var maxSize = 20;
var maxSpeed = 20;

var ballSize = 5;
var letters = [];
var mouseVec;


function customSetup(){
	background(255);


	for(var i = 0; i < numBalls; i++){
		ballArr.push(new Ball());
	}

	//Text vars for displaying IM name
	textStyle(BOLD);
	textSize(48);
	textAlign(CENTER);

	loadIM();
}

function draw(){

	// ballArr.forEach(function(ball){
	// 	ball.update();
	// });
  //
	// mouseEraser();
  //
	// mouseVec = createVector(mouseX, mouseY);
	// // mouseColourChange();
  //
	// letters.forEach(function(letter){
	// 	letter.update();
	// 	letter.render();
	// })
	background(255)
	strokeWeight(55)
	for(var x = 0; x < width*1.2; x += 60){
		for(var y = 0; y < height*1.2; y += 60){
			stroke(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 127, 200)
			line(x, y, lerp(x, mouseX, 0.05), lerp(y, mouseY, 0.05))
		}
	}


//	outline();
}

function mouseEraser(){

	var numCircles = 20;
	var sizeMult = ballSize;

	for(var i = 0; i < numCircles; i++){
		fill(255,100 - (i * (100/numCircles)));
		noStroke();
		ellipse(mouseX, mouseY, i*sizeMult, i*sizeMult);
	}
}

var Ball = function(){

	//create ball with random location and random size

	this.size = random(minSize, maxSize);
	this.location = createVector(random(maxSize, width - maxSize), random(maxSize, height - maxSize));
	this.velocity = createVector(random(maxSpeed) - maxSpeed/2 , random(maxSpeed) - maxSpeed/2);

}

Ball.prototype.update = function() {

	//bounce off sides
	this.checkEdges();

	//move the ball
	this.location.add(this.velocity);

	//show the ball
	this.render();
};

Ball.prototype.checkEdges = function() {
	//for the purposes of short code rename x, y and size
	var x = this.location.x;
	var y = this.location.y;

	var s = this.size/2;

	if(x - s < 0 || x + s > width){
			this.velocity.x *= -1;
	}
	if(y -s < 0 || y + s > height){
			this.velocity.y *= -1;
	}
};

Ball.prototype.render = function() {
	//some kind of purple every frame
	fill(127,0,random(100,200));
	noStroke();
	ellipse(this.location.x, this.location.y, this.size, this.size);
};

//Draw the IM text
function interactiveLetter (xpos, ypos, character, colour){
	this.pos = createVector(xpos, ypos);
	this.character = character;
	this.originalColour = colour;

	this.colour = this.originalColour;

}

interactiveLetter.prototype.update = function() {

	var mouseDistance = p5.Vector.dist(this.pos, mouseVec);
	if(mouseDistance < 50){
		this.colour = color(175,0,150);

	}else{
		this.colour = this.originalColour
	}
	// body...
};

interactiveLetter.prototype.render = function() {
	fill(this.colour);
	text(this.character, this.pos.x, this.pos.y);
};


//helper functions below
function randomChoice(arr){
	return arr[Math.floor((Math.random() * arr.length))];
}


//Load the IM text into position

function loadIM(){
	letters = [];
	noStroke();

	var im = "INTERACTIVEMEDIA"

	var rows = 2;
	var cols = 8;

	if(width > height * 2){
		rows = 2;
		cols = 8;

	}else {
		rows = 4;
		cols = 4;
	}

	var rowMultiplier = height/rows;
	var colMultiplier = width/cols;
	c = 0;

	for(var row = 0; row < rows; row++){
		for(var col = 0; col < cols; col++){

				//some fancy number crunching to place the text in the sort of middle of each grid section
				var colGridPlacement = col * colMultiplier+colMultiplier*0.5;
				var rowGridPlacement = row * rowMultiplier+rowMultiplier*0.5;

				var colour;
				if(c < 11){
					colour = 0;
				}else{
					colour = 204;
				}
				letters.push(new interactiveLetter(colGridPlacement, rowGridPlacement, im.charAt(cols*row + col), colour));

				// text(im.charAt(cols*row + col), colGridPlacement, rowGridPlacement);

				c++;
		}
	}
}
