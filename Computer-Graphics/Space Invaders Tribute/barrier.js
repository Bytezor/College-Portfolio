"use strict"

class BarrierPiece {
    xpos
    ypos
    canvas
    active
    constructor (x, y, canvas) {
        this.xpos = x
        this.ypos = y
        this.canvas = canvas
        this.active = 1
    }

}

class Barrier {
    xpos
    ypos
    canvas
    constructor (x, y, canvas) {
        this.xpos = x
        this.ypos = y
        this.canvas = canvas
        this.pieces = []
    }

    SetBarrier() {
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 3; j++) {
                this.pieces.push(new BarrierPiece(i*5, j*5, theCanvas))
            }
        }
    }

    DrawBarrier() {
        for(let i = 0; i < this.pieces.length; i++) {
            if (this.pieces[i].active != 0) {
                this.canvas.SetBlock(this.xpos + this.pieces[i].xpos, this.ypos + this.pieces[i].ypos, 100, 0, 255)
            }
        }
    }
}