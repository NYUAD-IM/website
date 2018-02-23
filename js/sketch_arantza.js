var title = 'interactive media';

function setup(){
	createCanvas(windowWidth, windowHeight);
	textSize(60);
}

function draw(){
	for (var i = 0; i < title.length; i++){
		fill(mouseX/3.5, mouseY/3.5, 0+250*noise(millis()*0.001, i*0.5));
		var ch = title.charAt(i);
		text(title, windowWidth/2, windowHeight/2);
	}
}