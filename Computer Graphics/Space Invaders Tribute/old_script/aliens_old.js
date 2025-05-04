"use strict"

const AlienArray = []

class Alien{
    xpos
    ypos
    canvas
    direction
    speed = 2
    priority = 1
    constructor (x,y, canvas, direction, speed, priority) {
       this.xpos = x
       this.ypos = y
       this.canvas = canvas
       this.direction = direction
       this.speed = speed
       this.priority = priority
    }

    Draw() {
        if (this.priority != 0) {
            for(let x = 0; x < 7; x++) {
                for(let y = -5; y < 0; y++) {
                    this.canvas.SetPixel(this.xpos+x, this.ypos-y, 0,0,255)
                }
            }
        }
    }

    Move() {
        if (this.direction != "right") {
            if (this.xpos > 0) {
                this.xpos = this.xpos - this.speed;
            }
            else {
                this.ypos = this.ypos + 5;
                this.direction = "right";
            }
        }
        if (this.direction != "left") {
            if (this.xpos < theCanvas.width-7) {
                this.xpos = this.xpos + this.speed;
            }
            else {
                this.ypos = this.ypos + 5;
                this.direction = "left";
            }
        }
    }

    get xpos() {
        return this.xpos
    }
  
     get ypos(){
        return this.ypos
    }

}

function SetArray() {
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j <= 11; j++) {
            AlienArray[(11 * i) + j + 1] = new Alien(j*11, i*9, theCanvas, "right", 2, i+1)
        }
    }
}

function drawArray() {
    for(let i = 0; i < 11; i++) {
        for(let j = 0; j <= 5; j++) {

        }
    }
}