"use strict"

class Mover{
    xpos
    ypos
    canvas
    cooldown
    lives
    score
    constructor (x,y, canvas, cooldown) {
       this.xpos = x
       this.ypos = y
       this.canvas = canvas
       this.cooldown = cooldown 
       this.lives = 3
       this.score = 0
    }

    Draw() {
        for(let x = -8; x < 9; x++) {
           for(let y = 0; y < 9; y++) {
              this.canvas.SetPixel(this.xpos+x, this.ypos-y, 0,0,255)
           }
        }
    }

    Move(key) {
        switch(key) {
            case 'a':
            case 'j':
            case 'ArrowLeft':
                if (this.xpos > 10) {
                    this.xpos = this.xpos - 5;
                }
            break
            case 'd':
            case 'k':
            case 'ArrowRight':
                if (this.xpos < theCanvas.width-10) {
                    this.xpos = this.xpos + 5;
                }
            break
        }
    }

    Shoot(key) {
        if (key == 'f' && this.cooldown != 1) {
            playerProjectile.ResetPos();
            this.cooldown = 1;
        }
    }

    LoseLife() {
        this.lives -= 1
        document.getElementById("playerHUD").innerHTML = "Score: " + player.score + "\t Lives: " + player.lives;
        fleet.xpos = 0
        fleet.ypos = 0
        playerProjectile.ResetPos()
        if (this.lives == 0) {
            document.getElementById("playerHUD").innerHTML = "Score: " + player.score + "\t Lives: " + player.lives + " GAME OVER!";
        }
        if (fleet.projectile.length > 0) {
            for (let i = 0; i < fleet.projectile.length; i++) {
                fleet.projectile.splice(i, 1)
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

class Projectile{
    xpos
    ypos
    canvas
    constructor (x, y, canvas) {
        this.xpos = x
        this.ypos = y
        this.canvas = canvas
    }

    ResetPos() {
    this.xpos = player.xpos
    this.ypos = player.ypos-14
    }

    Draw() {
        for(let x = 0; x < 1; x++) {
           for(let y = -3; y < 1; y++) {
              this.canvas.SetPixel(this.xpos+x, this.ypos-y, 0,0,255)
           }
        }
        this.Move();
    }

    Move() {
        this.ypos = this.ypos - 5;
        if (this.ypos < 0) {
            player.cooldown = 0;
        }
        if (this.ypos <= fleet.ypos + fleet.length + 5) {
            if (this.ypos > fleet.ypos)
            this.CheckHit()
        }
        if (this.ypos > 190) {
            this.CheckHit()
        }
    }

    CheckHit() {
        console.log("testing hit")
        for (let i = 0; i < fleet.aliens.length; i++) {
            let xdis = this.xpos - (fleet.aliens[i].xpos + 3 + fleet.xpos)
            let ydis = this.ypos - (fleet.aliens[i].ypos + 2 + fleet.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            console.log(distance)
            if (distance <= 5) {
                gameExplosions.AddExplosion(fleet.aliens[i].xpos + 3 + fleet.xpos, fleet.aliens[i].ypos + 2 + fleet.ypos)
                fleet.aliens.splice(i, 1)
                player.score += 100
                document.getElementById("playerHUD").innerHTML = "Score: " + player.score + "\t Lives: " + player.lives;
                this.xpos = -50
                this.ypos = -50
                fleet.CheckWidth()
                fleet.CheckLength()
                fleet.colorModifier += 5
                fleet.speed += 0.1
                fleet.count -= 1
                document.getElementById("aliensRemaining").innerHTML = "Aliens Remaining: " + fleet.count;
                if (fleet.count == 0) {
                    document.getElementById("playerHUD").innerHTML = "Score: " + player.score + "\t Lives: " + player.lives + " YOU WIN!";
                    player.lives = 0
                }
            }
        }
        for (let i = 0; i < barrier1.pieces.length; i++) {
            let xdis = this.xpos - (barrier1.pieces[i].xpos + barrier1.xpos)
            let ydis = this.ypos - (barrier1.pieces[i].ypos + barrier1.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier1.pieces[i].xpos + barrier1.xpos, barrier1.pieces[i].ypos + barrier1.ypos)
                barrier1.pieces.splice(i, 1)
                this.xpos = -50
                this.ypos = -50
            }
        }
        for (let i = 0; i < barrier2.pieces.length; i++) {
            let xdis = this.xpos - (barrier2.pieces[i].xpos + barrier2.xpos)
            let ydis = this.ypos - (barrier2.pieces[i].ypos + barrier2.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier2.pieces[i].xpos + barrier2.xpos, barrier2.pieces[i].ypos + barrier2.ypos)
                barrier2.pieces.splice(i, 1)
                this.xpos = -50
                this.ypos = -50
            }
        }
        for (let i = 0; i < barrier3.pieces.length; i++) {
            let xdis = this.xpos - (barrier3.pieces[i].xpos + barrier3.xpos)
            let ydis = this.ypos - (barrier3.pieces[i].ypos + barrier3.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier3.pieces[i].xpos + barrier3.xpos, barrier3.pieces[i].ypos + barrier3.ypos)
                barrier3.pieces.splice(i, 1)
                this.xpos = -50
                this.ypos = -50
            }
        }
        for (let i = 0; i < barrier4.pieces.length; i++) {
            let xdis = this.xpos - (barrier4.pieces[i].xpos + barrier4.xpos)
            let ydis = this.ypos - (barrier4.pieces[i].ypos + barrier4.ypos)
            let distance = Math.sqrt(xdis * xdis + ydis * ydis)
            if (distance <= 5) {
                gameExplosions.AddExplosion(barrier4.pieces[i].xpos + barrier4.xpos, barrier4.pieces[i].ypos + barrier4.ypos)
                barrier4.pieces.splice(i, 1)
                this.xpos = -50
                this.ypos = -50
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