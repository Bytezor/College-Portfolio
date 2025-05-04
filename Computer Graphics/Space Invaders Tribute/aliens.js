"use strict"

class Alien{
    xpos
    ypos
    canvas
    direction
    priority = 1
    constructor (x,y, canvas, direction, priority) {
       this.xpos = x
       this.ypos = y
       this.canvas = canvas
       this.direction = direction
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

    get xpos() {
        return this.xpos
    }
  
     get ypos(){
        return this.ypos
    }

}

class AlienGroup {
    xpos
    ypos
    canvas
    direction
    speed
    count
    width
    length
    startPoint
    colorModifier
    topPriority
    constructor (x, y, canvas, direction) {
        this.xpos = x
        this.ypos = y
        this.canvas = canvas
        this.direction = direction
        this.speed = 1
        this.count = 55
        this.aliens = []
        this.projectile = []
        this.width = 137
        this.length = 45
        this.startPoint = 0
        this.colorModifier = 0
        this.topPriority = 5
    }
    
    SetArray() {
        for(let i = 0; i < 11; i++) {
            for(let j = 0; j < 5; j++) {
                this.aliens.push(new Alien(i*13, j*10, theCanvas, "right", j+1))
            }
        }
        for(let i = 0; i < this.aliens.length; i++) {
            console.log(this.aliens[i])
        }
    }

    DrawArray() {
        for(let i = 0; i < this.aliens.length; i++) {
            if (this.aliens[i].priority != 0) {
                for(let x = 0; x < 7; x++) {
                    for(let y = 0; y < 5; y++) {
                        this.canvas.SetPixel(this.xpos + this.aliens[i].xpos+x, this.ypos + this.aliens[i].ypos+y, 0 + this.colorModifier, 255 - this.colorModifier, 0)
                    }
                }
            }
        }
        this.ManageProjectiles()
    }

    MoveArray() {
        if (this.direction != "right") {
            if (this.xpos + this.startPoint > 0) {
                this.xpos = this.xpos - Math.floor(this.speed);
            }
            else {
                this.ypos = this.ypos + 5;
                this.direction = "right";
            }
        }
        if (this.direction != "left") {
            if (this.xpos + this.width <= 350) {
                this.xpos = this.xpos + Math.floor(this.speed);
            }
            else {
                this.ypos = this.ypos + 5;
                this.direction = "left";
            }
        }
        if (this.ypos + this.length > -1) {
            this.ManageCollision()
        }
        if (this.ypos + this.length > 240) {
            player.LoseLife()
        }
    }

    CheckWidth() {
        this.startPoint = this.aliens[0].xpos
        console.log(this.aliens[0])
        this.width = this.aliens[this.aliens.length-1].xpos+7
    }

    CheckLength() {
        let newPriority = 1
        for (let i = 0; i < this.aliens.length; i++){
            if (newPriority < this.aliens[i].priority) {
                newPriority = this.aliens[i].priority
            }
            this.topPriority = newPriority
            this.length = (newPriority * 10) - 5
        }
    }

    Shoot() {
        if (fleet.projectile.length < 4) {
            let alienIndex = Math.floor(Math.random() * (fleet.count-1))
            if (fleet.aliens[alienIndex].priority == fleet.topPriority) {
                fleet.projectile.push(new AlienProjectile(fleet.aliens[alienIndex].xpos + 3 + fleet.xpos, fleet.aliens[alienIndex].ypos + 4 + fleet.ypos, theCanvas))
            }
        }
    }
    
    ManageProjectiles() {
        if (this.projectile.length > 0) {
            for (let i = 0; i < this.projectile.length; i++) {
                this.projectile[i].Draw()
                if (this.projectile[i].ypos > 180) {
                    this.CheckHit(this.projectile[i])
                }
            }
            for (let i = 0; i < this.projectile.length; i++) {
                if (this.projectile[i].ypos > 250) {
                    this.projectile.splice(i, 1)
                }
            }
        }
    }

    ManageCollision() {
        for (let i = 0; i < barrier1.pieces.length; i++) {
            if (this.xpos + this.startPoint < barrier1.xpos + 3 + barrier1.pieces[0].xpos) {
                if (barrier1.xpos + barrier1.pieces[0].xpos + 3 < this.xpos + this.width) {
                    if (this.ypos < barrier1.ypos + barrier1.pieces[i].ypos + 3) {
                        if (barrier1.ypos + barrier1.pieces[i].ypos + 3 < this.ypos + this.length) {
                            barrier1.pieces.splice(i, 1)
                        }
                    }
                }
            }
        }
        for (let i = 0; i < barrier2.pieces.length; i++) {
            if (this.xpos + this.startPoint < barrier2.xpos + 3 + barrier2.pieces[0].xpos) {
                if (barrier2.xpos + barrier2.pieces[0].xpos + 3 < this.xpos + this.width) {
                    if (this.ypos < barrier2.ypos + barrier2.pieces[i].ypos + 3) {
                        if (barrier2.ypos + barrier2.pieces[i].ypos + 3 < this.ypos + this.length) {
                            barrier2.pieces.splice(i, 1)
                        }
                    }
                }
            }
        }
        for (let i = 0; i < barrier3.pieces.length; i++) {
            if (this.xpos + this.startPoint < barrier3.xpos + 3 + barrier3.pieces[0].xpos) {
                if (barrier3.xpos + barrier3.pieces[0].xpos + 3 < this.xpos + this.width) {
                    if (this.ypos < barrier3.ypos + barrier3.pieces[i].ypos + 3) {
                        if (barrier3.ypos + barrier3.pieces[i].ypos + 3 < this.ypos + this.length) {
                            barrier3.pieces.splice(i, 1)
                        }
                    }
                }
            }
        }
        for (let i = 0; i < barrier4.pieces.length; i++) {
            if (this.xpos + this.startPoint < barrier4.xpos + 3 + barrier4.pieces[0].xpos) {
                if (barrier4.xpos + barrier4.pieces[0].xpos + 3 < this.xpos + this.width) {
                    if (this.ypos < barrier4.ypos + barrier4.pieces[i].ypos + 3) {
                        if (barrier4.ypos + barrier4.pieces[i].ypos + 3 < this.ypos + this.length) {
                            barrier4.pieces.splice(i, 1)
                        }
                    }
                }
            }
        }
    }

    CheckHit(firedProjectile) {
        for (let i = 0; i < barrier1.pieces.length; i++) {
            let xdis = firedProjectile.xpos - (barrier1.pieces[i].xpos + barrier1.xpos)
            let ydis = firedProjectile.ypos - (barrier1.pieces[i].ypos + barrier1.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier1.pieces[i].xpos + barrier1.xpos, barrier1.pieces[i].ypos + barrier1.ypos)
                barrier1.pieces.splice(i, 1)
                this.projectile.splice(firedProjectile, 1)
            }
        }
        for (let i = 0; i < barrier2.pieces.length; i++) {
            let xdis = firedProjectile.xpos - (barrier2.pieces[i].xpos + barrier2.xpos)
            let ydis = firedProjectile.ypos - (barrier2.pieces[i].ypos + barrier2.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier2.pieces[i].xpos + barrier2.xpos, barrier2.pieces[i].ypos + barrier2.ypos)
                barrier2.pieces.splice(i, 1)
                this.projectile.splice(firedProjectile, 1)
            }
        }
        for (let i = 0; i < barrier3.pieces.length; i++) {
            let xdis = firedProjectile.xpos - (barrier3.pieces[i].xpos + barrier3.xpos)
            let ydis = firedProjectile.ypos - (barrier3.pieces[i].ypos + barrier3.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier3.pieces[i].xpos + barrier3.xpos, barrier3.pieces[i].ypos + barrier3.ypos)
                barrier3.pieces.splice(i, 1)
                this.projectile.splice(firedProjectile, 1)
            }
        }
        for (let i = 0; i < barrier4.pieces.length; i++) {
            let xdis = firedProjectile.xpos - (barrier4.pieces[i].xpos + barrier4.xpos)
            let ydis = firedProjectile.ypos - (barrier4.pieces[i].ypos + barrier4.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier4.pieces[i].xpos + barrier4.xpos, barrier4.pieces[i].ypos + barrier4.ypos)
                barrier4.pieces.splice(i, 1)
                this.projectile.splice(firedProjectile, 1)
            }
        }
        let xdis = firedProjectile.xpos - player.xpos
        let ydis = firedProjectile.ypos - player.ypos
        let distance = Math.sqrt(xdis * xdis + ydis * ydis)
        if (distance <= 8) {
            console.log("oh no!")
            player.LoseLife()
            this.projectile.splice(firedProjectile, 1)
        }
    }
}

class AlienProjectile {
    xpos
    ypos
    canvas
    constructor (x, y, canvas) {
        this.xpos = x
        this.ypos = y
        this.canvas = canvas
    }

    Draw() {
        this.ypos = this.ypos + 5;
        for(let x = 0; x < 1; x++) {
           for(let y = -5; y < 2; y++) {
              this.canvas.SetPixel(this.xpos+x, this.ypos-y, 255,0,0)
           }
        }
    }
}