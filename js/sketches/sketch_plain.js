/*
	Template code for sketch to run on nyuad.im website
	
	Modified Dec 2017
	James Hosken
*/

var letters = [];

var mouseVec;
var mouseColour;
// var mouseColourNoiseSpeed = 0.01;
// var mouseColourNoiseRedOffset = 10;
// var mouseColourNoiseGreenOffset = 50;
// var mouseColourNoiseBlueOffset = 100;

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

	loadIM();
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


function customSetup(){
	background(255);

	//Text vars for displaying IM name
	textStyle(BOLD);
	textSize(60);
	textAlign(CENTER);

	loadIM();
}

function draw(){

	background(255);
	stroke(1);	

	mouseVec = createVector(mouseX, mouseY);
	// mouseColourChange();

	letters.forEach(function(letter){
		letter.update();
		letter.render();
	})
}


// function mouseColourChange(){

	
// 	mouseColourNoiseRedOffset += mouseColourNoiseSpeed;
// 	mouseColourNoiseGreenOffset += mouseColourNoiseSpeed;
// 	mouseColourNoiseBlueOffset += mouseColourNoiseSpeed;

//   	var r = 50 + noise(mouseColourNoiseRedOffset) * 75	;
//    	var g = noise(mouseColourNoiseGreenOffset) * 25;
//   	var b = 75 + noise(mouseColourNoiseBlueOffset) * 50;

//   	mouseColour = color(255,g,b);

// }



function interactiveLetter (xpos, ypos, character, colour){
	this.pos = createVector(xpos, ypos);
	this.character = character;
	this.originalColour = colour;

	this.colour = this.originalColour;

}

interactiveLetter.prototype.update = function() {

	var mouseDistance = p5.Vector.dist(this.pos, mouseVec);
	if(mouseDistance < 100){
		this.colour = color(204,0,0);

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