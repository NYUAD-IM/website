class ComputerPaddle {
    constructor(isLeft) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;

        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = width - this.w;
        }


    }

    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
        this.ycenter = this.y + this.h;
    }

    move(steps) {
        this.ychange = steps;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }

    move_to_puck(puck_y_pos){
      //console.log('puck_y_pos is', puck_y_pos, 'this pos is', (this.y + this.h));
      //console.log('puck_y_pos is',puck_y_pos);
      /*if(puck_y_pos > this.y && puck_y_pos < (this.y + this.h)){
        this.move(0);
      }else */
      if(puck_y_pos < this.y){
        this.move(-5);
      }else if(puck_y_pos > (this.y + this.h)){

        this.move(5);
      }
    }

}
