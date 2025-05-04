'use strict'

function GetRandomColor() {
    const r = Math.floor(Math.random() * 230)
    const g = Math.floor(Math.random() * 230)
    const b = Math.floor(Math.random() * 230)
    return `rgb(${r}, ${g}, ${b})`;
}

class Person{
    xpos
    ypos
    scale
    theta
    faceColor
    constructor (cx=0, cy=0, scale=1, color='yellow') {
        this.xpos = cx
        this.ypos = cy
        this.scale = scale
        this.faceColor = color
    }

    SetPos(x, y) {
        this.xpos = x
        this.ypos = y
    }

    SetScale(newScale) {
        this.scale = newScale
    }

    SetRotate(newTheta) {
        this.theta = newTheta
    }

    Display(ctx) {
        ctx.save()
        ctx.translate(this.xpos, this.ypos)
        ctx.rotate(this.theta * (Math.PI / 180))
        ctx.scale(this.scale, this.scale)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, 40) //body
        ctx.moveTo(0, 0)
        ctx.lineTo(-20, -30) //left leg
        ctx.moveTo(0, 0)
        ctx.lineTo(20, -30) //right leg
        ctx.moveTo(-20, 30)
        ctx.lineTo(20, 30) //arms
        ctx.moveTo(20, 60)
        ctx.arc(0, 60, 20, 0, 2 * Math.PI); //head
        ctx.moveTo(-15, +60)
        ctx.fillStyle = this.faceColor
        ctx.arc(0, 60, 15, Math.PI, 0) //smile
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-4, 68)
        ctx.arc(-8, 68, 4, 0, 2 * Math.PI) //eyes
        ctx.moveTo(12, 68)
        ctx.arc(8, 68, 4, 0, 2 * Math.PI)
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }
}

class Fence{
    xpos
    ypos
    color1
    color2
    constructor (cx=0, cy=0) {
        this.xpos = cx
        this.ypos = cy
        this.color1 = GetRandomColor()
        this.color2 = GetRandomColor()
    }

    Display(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color1;
        ctx.strokeStyle = 'black';
        ctx.rect(this.xpos, this.ypos, 15, 85)
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.fillStyle = this.color2;
        ctx.rect(this.xpos+15, this.ypos+30, 85, 15)
        ctx.rect(this.xpos+15, this.ypos+55, 85, 15)
        ctx.fill()
        ctx.stroke()
    }
}

class Star{
    xpos
    ypos
    size
    starTheta
    starScale
    starDirection
    type
    constructor (cx=0, cy=0, starSize) {
        this.xpos = cx
        this.ypos = cy
        this.size = Math.floor(Math.random() * (40 - 20) + 20)
        this.starTheta = Math.floor(Math.random() * 360)
        this.starScale = Math.floor(Math.random() * (35 - 20) + 20) * 0.01
        this.starDirection = 1
        this.type = "animated"
    }

    Display(ctx) {
        ctx.save()
        ctx.translate(this.xpos, this.ypos)
        ctx.scale(this.starScale, this.starScale)
        ctx.rotate(this.starTheta * (Math.PI / 180))
        let b = Math.PI/2
        let a = 2*Math.PI/5
     
        let sides=[0, 2, 4, 1, 3]
     
        ctx.beginPath()
     
        ctx.strokeStyle = "yellow"
        ctx.lineWidth = 2
     
        let sx = this.size*Math.cos(b)
        let sy = this.size*Math.sin(b)
     
        ctx.moveTo(sx,sy);
     
        for(let i = 1; i<=5;i++) {
           let s = sides[i]
           let x = this.size*Math.cos(s*a + b)
           let y = this.size*Math.sin(s*a + b)
     
           ctx.lineTo(x,y)
        }
     
        ctx.lineTo(sx,sy)
     
        ctx.stroke()
        ctx.restore()
    }

    Next() {
        this.starTheta += 2
        if (this.starScale >=0.4) {
            this.starDirection = -1
        }
        if (this.starScale <= 0.2) {
            this.starDirection = 1
        }
        this.starScale += 0.01 * this.starDirection
    }
}

class Couple{
    xpos
    ypos
    person1
    person2
    direction
    xtrans
    ytrans
    type
    constructor (cx=0, cy=0) {
        this.xpos = cx
        this.ypos = cy
        this.person1 = new Person(this.xpos, this.ypos, 0.8, GetRandomColor())
        this.person2 = new Person(this.xpos+32, this.ypos, 0.75, GetRandomColor())
        this.direction = "right"
        this.xtrans = 0
        this.ytrans = 0
        this.type = "animated"
    }

    Display(ctx) {
        ctx.save()
        ctx.translate(this.xtrans, this.ytrans)
        this.person1.Display(ctx)
        this.person2.Display(ctx)
        ctx.restore()
    }

    Next() {
        if (this.xtrans == 0 && this.ytrans == 0) {
            this.direction = "right"
        }
        if (this.xtrans == 50 && this.ytrans == 0) {
            this.direction = "up"
        }
        if (this.xtrans == 50 && this.ytrans == 50) {
            this.direction = "left"
        }
        if (this.xtrans == 0 && this.ytrans == 50) {
            this.direction = "down"
        }
        switch (this.direction) {
            case "right":
                this.xtrans += 1
                break
            case "up":
                this.ytrans += 1
                break
            case "left":
                this.xtrans -= 1
                break
            case "down":
                this.ytrans -= 1
                break
        }
    } 
}

class Seesaw{
    xpos
    ypos
    person1
    person2
    rotation
    direction
    type
    constructor (cx=0, cy=0, rotation=0) {
        this.xpos = cx
        this.ypos = cy
        this.person1 = new Person(-40, 0, 0.6, GetRandomColor())
        this.person2 = new Person(40, 0, 0.6, GetRandomColor())
        this.rotation = rotation
        this.direction = "down"
        this.type = "animated"
    }

    Display(ctx) {
        ctx.save()
        ctx.translate(this.xpos, this.ypos)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-20, -25)
        ctx.lineTo(20, -25)
        ctx.lineTo(0, 0)
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.stroke()
        ctx.rotate(this.rotation * (Math.PI / 180))
        this.person1.SetRotate(-this.rotation)
        this.person2.SetRotate(-this.rotation)
        ctx.beginPath()
        ctx.moveTo(-60, 0)
        ctx.lineTo(60, 0)
        ctx.stroke()
        this.person1.Display(ctx)
        this.person2.Display(ctx)
        ctx.restore()
    }

    Next() {
        if (this.direction == "down") {
            this.rotation += 1
            if (this.rotation == 20) {
                this.direction = "up"
            }
        }
        if (this.direction == "up") {
            this.rotation -= 1
            if (this.rotation == -20) {
                this.direction = "down"
            }
        }
    }
}

class Swing{
    xpos
    ypos
    person
    rotation
    direction
    type
    constructor (cx=0, cy=0, rotation=0) {
        this.xpos = cx
        this.ypos = cy
        this.person = new Person(0, -150, 0.6, GetRandomColor())
        this.rotation = rotation
        this.direction = "right"
        this.type = "animated"
    }

    Display(ctx) {
        ctx.save()
        ctx.translate(this.xpos, this.ypos)
        ctx.beginPath()
        ctx.moveTo(-75, -200)
        ctx.lineTo(0, 0)
        ctx.lineTo(75, -200)
        ctx.stroke()
        ctx.rotate(this.rotation * (Math.PI / 180))
        this.person.SetRotate(-(0.5 * this.rotation))
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -150)
        ctx.moveTo(-10, -150)
        ctx.lineTo(10, -150)
        ctx.stroke()
        this.person.Display(ctx)
        ctx.restore()
    }

    Next() {
        if (this.direction == "right") {
            this.rotation += 5
            if (this.rotation >= 50) {
                this.direction = "left"
            }
        }
        if (this.direction == "left") {
            this.rotation -= 5
            if (this.rotation <= -50) {
                this.direction = "right"
            }
        }
    }
}