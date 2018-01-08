var sketch_01 = {
  formResolution: 15,
  stepSize: 2,
  distortionFactor: 1,
  initRadius: 150,
  centerX: 0,
  centerY: 0,
  x: new Array(this.formResolution),
  y: new Array(this.formResolution),

  filled: false,
  freeze: false,
  run_setup: true,
  setup: function(){
      //do setup
      smooth();
      background(255);
      // init form
      this.centerX = width/2;
      this.centerY = height/2;
      var angle = radians(360/this.formResolution);
      for (var i=0; i<this.formResolution; i++){
        this.x[i] = cos(angle*i) * this.initRadius;
        this.y[i] = sin(angle*i) * this.initRadius;
      }

      stroke(0, 50);
      background(255);
      //console.log(this.run_setup);
      this.run_setup = false;
  },
  draw: function(){
    if (mouseX != 0 || mouseY != 0) {
      this.centerX += (mouseX-this.centerX) * 0.01;
      this.centerY += (mouseY-this.centerY) * 0.01;
    }

    // calculate new povars
    for (var i=0; i<this.formResolution; i++){
      this.x[i] += random(-this.stepSize,this.stepSize);
      this.y[i] += random(-this.stepSize,this.stepSize);
      // ellipse(x[i], y[i], 5, 5);
    }

    strokeWeight(0.75);
    if (this.filled) fill(random(255));
    else noFill();

    beginShape();
    // start controlpovar
    curveVertex(this.x[this.formResolution-1]+this.centerX, this.y[this.formResolution-1]+this.centerY);

    // only these povars are drawn
    for (var i=0; i<this.formResolution; i++){
      curveVertex(this.x[i]+this.centerX, this.y[i]+this.centerY);
    }
    curveVertex(this.x[0]+this.centerX, this.y[0]+this.centerY);

    // end controlpovar
    curveVertex(this.x[1]+this.centerX, this.y[1]+this.centerY);
    endShape();
    this.check_mouse_press();
  },
  check_mouse_press: function(){
    /*if(mouseIsPressed){
      this.centerX = mouseX;
      this.centerY = mouseY;
      var angle = radians(360/this.formResolution);
      var radius = initRadius * random(0.5,1.0);
      for (var i=0; i<formResolution; i++){
        x[i] = cos(angle*i) * radius;
        y[i] = sin(angle*i) * radius;
      }
    }*/
  },
  run: function(){
    if(this.run_setup){this.setup()};
    this.draw();
  },
  reset: function(){
    this.run_setup = true;
  }
}
