"use strict"

class Explosion {
    xpos
    ypos
    radius
    maxRadius
    canvas
    constructor (x,y, maxRadius, canvas) {
       this.xpos = x
       this.ypos = y
       this.radius = 0
       this.maxRadius = maxRadius
       this.canvas = canvas
    }
 
 
    
    Draw() {
        this.canvas.SetPixel(this.xpos - this.radius, this.ypos, 255,130,0) //left
        this.canvas.SetPixel(this.xpos + this.radius, this.ypos, 255,130,0) //right
        this.canvas.SetPixel(this.xpos, this.ypos + this.radius, 255,130,0) //up
        this.canvas.SetPixel(this.xpos, this.ypos - this.radius, 255,130,0) //down
        this.canvas.SetPixel(this.xpos - this.radius, this.ypos + this.radius, 255,130,0) //top left
        this.canvas.SetPixel(this.xpos + this.radius, this.ypos + this.radius, 255,130,0) //top right
        this.canvas.SetPixel(this.xpos - this.radius, this.ypos - this.radius, 255,130,0) //bottom left
        this.canvas.SetPixel(this.xpos + this.radius, this.ypos - this.radius, 255,130,0) //bottom right
    }
}
 
 
 
class ExplosionArray {
    explosions
    canvas
    constructor(canvas) {
        this.explosions = []
        this.canvas = canvas
    }

    AddExplosion(xpos, ypos) {
        this.explosions.push(new Explosion(xpos, ypos, 4, theCanvas))
    }

    DrawExplosions() {
        if (this.explosions.length > 0) {
            for (let i = 0; i < this.explosions.length; i++) {
                this.explosions[i].Draw()
            }
        }
    }

    UpdateExplosions() {
        if (gameExplosions.explosions.length > 0) {
            for (let i = 0; i < gameExplosions.explosions.length; i++) {
                gameExplosions.explosions[i].radius += 1
                if (gameExplosions.explosions[i].radius > gameExplosions.explosions[i].maxRadius) {
                    gameExplosions.explosions.splice(i, 1)
                }
            }
        }
    }
}