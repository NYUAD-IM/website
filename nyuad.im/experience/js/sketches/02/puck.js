class Puck {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 12;

        //this.reset();
    }

    checkPaddleLeft(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x - this.r < p.x + p.w/2) {

            if (this.x > p.x) {
                let diff = this.y - (p.y - p.h/2);
                let rad = radians(45);
                let angle = map(diff, 0, p.h, -rad, rad);
                this.xspeed = 8 * cos(angle);
                this.yspeed = 8 * sin(angle);
                this.x = p.x + p.w/2 + this.r;
            }

        }
    }

    checkPaddleRight(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x + this.r > p.x - p.w/2) {

            if (this.x < p.x) {
                let diff = this.y - (p.y - p.h/2);
                let angle = map(diff, 0, p.h, radians(225), radians(135));
                this.xspeed = 8 * cos(angle);
                this.yspeed = 8 * sin(angle);
                this.x = p.x - p.w/2 - this.r;
            }
        }
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    reset() {
      console.log('reset called!');
        this.x = width/2;
        this.y = height/2;
        let angle = random(-PI/4, PI/4);
        this.xspeed = 8 * Math.cos(angle);
        this.yspeed = 8 * Math.sin(angle);

        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }

    edges() {
        if (this.y < 0 || this.y > height) {
            this.yspeed *= -1;
        }

        if (this.x - this.r > width) {
          console.log('condition is satisfied!');
            //ding.play();
            sketch_02.computer_score++;
            this.reset();
        }

        if (this.x + this.r < 0) {
          console.log('condition is satisfied!');
            //ding.play();
            sketch_02.player_score++;
            this.reset();
        }
    }

    show() {
        fill(255,10,10);
        //rect(100,100,100,100);
        ellipse(this.x, this.y, this.r*2,this.r*2);
        //ellipse(56, 46, 55, 55);
        //rect(this.x, this.y, 40,40);
        //console.log(this.x,this.y);
        //rect(100,200,100,100);
        //console.log(this.x);
    }
}
