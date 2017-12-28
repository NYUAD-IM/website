/*
	Template code for sketch to run on nyuad.im website
	
	Modified Dec 2017
	James Hosken

*/

function setup() {

	var canvas = createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.6);
	
	// Move the canvas so it's inside our <div id="canvas-container">.
	canvas.parent('canvas-container');

	//Setup variables for custom sketch. Move your setup code into customSetup function below
	customSetup();	

	resize();
}


function windowResized() {
	resize();
}

function resize(){

	var w = select('#canvas-container').width;
	var h = select('#canvas-container').height;

	console.log(w + " : " + h);

	resizeCanvas(w, h);
}

function outline(){
	noFill();
	strokeWeight(1);
	stroke(0);
	rect(0,0,width-1, height-1);
}





// Modify above at your own risk
// Modify below freely

////////////////////
// DEFAULT SKETCH //
////////////////////

var ballArr = [];

function customSetup(){
	background(255);

	var numBalls = 30;
	for(var i = 0; i < numBalls; i++){
		ballArr.push(new Ball());
	}

	//Text vars for displaying IM name
	textStyle(BOLD);
	textSize(48);
	textAlign(CENTER);
}

function draw(){

	ballArr.forEach(function(ball){
		ball.update();
	});

	mouseEraser();

	drawIM();
	outline();		
}

function mouseEraser(){

	var numCircles = 20;
	var sizeMult = 5;

	for(var i = 0; i < numCircles; i++){
		fill(255,255 - (i * (255/numCircles)));
		noStroke();
		ellipse(mouseX, mouseY, i*sizeMult, i*sizeMult);
	}
}

var Ball = function(){

	//create ball with random location and random size
	
	var minSize = 10;
	var maxSize = 20;

	var maxSpeed = 6;

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

function drawIM(){

	noStroke();

	var im = "INTERACTIVEMEDIA"

	var rows = 2;
	var cols = 8;

	if(width > height * 2){
		rows = 2;
		cols = 8;

	}else if(width > height){
		rows = 4;
		cols = 4;
	}else{
		rows = 8;
		cols = 2;
	}

	var rowMultiplier = height/rows;
	var colMultiplier = width/cols;
	c = 0;

	

	for(var row = 0; row < rows; row++){
		for(var col = 0; col < cols; col++){

				

				//some fancy number crunching to place the text in the sort of middle of each grid section
				var colGridPlacement = col * colMultiplier+colMultiplier*0.5;
				var rowGridPlacement = row * rowMultiplier+rowMultiplier*0.5;

				
				if(c < 11){
					fill(0);
				}else{
					fill(204);
				}

				text(im.charAt(cols*row + col), colGridPlacement, rowGridPlacement);
				c++;
		}
	}

}


//helper functions below
function randomChoice(arr){
	return arr[Math.floor((Math.random() * arr.length))];
}