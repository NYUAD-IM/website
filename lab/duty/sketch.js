var s = function(sketch){

	sketch.setup = function() {
		sketch.createCanvas(window.innerWidth, window.innerHeight);
		sketch.textAlign(sketch.CENTER);
		sketch.textSize(50);
	}

	sketch.draw = function() {
		sketch.background(0,0,0);

		sketch.fill(255);

		var offset = 75;


		if(monitorStatus){
			var width = sketch.width;
			var height = sketch.height;

			sketch.text("MONITOR ON DUTY:", width/2, height/2 - 1.5 * offset)

			sketch.fill(255,0,0);
			sketch.text(monitorName, width/2, height/2 - 0.5 * offset);

			sketch.fill(255);
			sketch.text("UNTIL", width/2, height/2 + 0.5 * offset);

			sketch.text(monitorTime, width/2, height/2 + 1.5* offset);

		}else{
			
			var width = sketch.width;
			var height = sketch.height;
			sketch.fill(255,0,0);
			sketch.text("NO MONITOR ON DUTY. NEXT MONITOR:", width/2, height/2 - 1.5 * offset);

			sketch.fill(255);
			sketch.text(monitorName, width/2, height/2 - 0.5 * offset);

			sketch.fill(255);
			sketch.text("AT", width/2, height/2 + 0.5 * offset);

			
			sketch.text(monitorTime + " (" + monitorDate + ")", width/2, height/2 + 1.5 * offset);
		}

		sketch.mouseOver();
	}

	sketch.mouseOver = function(){

		// sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20);
		//sketch.loadPixels()

		// for (var i = sketch.mouseX-10; i < sketch.mouseX+10; i++) {
		//   for (var j = sketch.mouseY-10; j < sketch.mouseY+10; j++) {
		//     var c = sketch.color(0,0,0,0);
		//     sketch.set(i, j, sketch.c);
		//   }
		// }
		// sketch.updatePixels();
	}

}

var dutyRoster = new p5(s);