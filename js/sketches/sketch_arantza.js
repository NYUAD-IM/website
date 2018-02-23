function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255)
}

function draw(){
	background(255, 255, 255)
	drawBackground()
}

function drawBackground() {

	strokeWeight(55)
	for(var x = 0; x < width*1.2; x += 60){
		for(var y = 0; y < height*1.2; y += 60){
			stroke(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 127, 200)
			line(x, y, lerp(x, mouseX, 0.05), lerp(y, mouseY, 0.05))
		}
	}
}
