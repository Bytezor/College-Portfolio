"use strict"

function Display(object) {
    if (object.type == "animated" && timer != null) {
        object.Next();
    }
    object.Display(ctx);
}

function DrawScene() {
    ctx.clearRect(0, 0, width, height)
    ctx.save()

    ctx.setTransform(1, 0, 0, -1, 0, height)
    DrawWorld()

    ctx.translate(worldTx, worldTy)
    for(let i = 0; i < Stars.length; i++) {
        Display(Stars[i])
    }
    for(let i = 0; i < Fences.length; i++) {
        Display(Fences[i])
    }
    Display(Couple1)
    Display(Couple2)
    Display(Seesaw1)
    Display(Seesaw2)
    Display(Swing1)
    Display(Swing2)
    DrawBuildings()

    ctx.restore()
    ctx.save()
    ctx.setTransform(1, 0, 0, -1, 0, height)
    Display(Smiley)
    ctx.restore()
}

function DrawWorld() {
    ctx.beginPath()
    ctx.fillStyle = "#7efe42"
    ctx.fillRect(0, 0, 500, 300)
    ctx.fillStyle = "#848c80"
    ctx.fillRect(0, 300, 500, 500)
}

function DrawBuildings() {
    //house
    ctx.beginPath() //main building
    ctx.fillStyle = "red"
    ctx.rect(20, 5, 200, 325)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath() //chimney
    ctx.rect(25, 340, 20, 60)
    ctx.fillStyle = "brown"
    ctx.fill()
    ctx.stroke()
    ctx.beginPath() //roof
    ctx.moveTo(-10, 325)
    ctx.lineTo(120, 450)
    ctx.lineTo(250, 325)
    ctx.lineTo(-10, 325)
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.stroke()
    ctx.moveTo(220, 210) //side roof
    ctx.lineTo(220, 170)
    ctx.lineTo(300, 170)
    ctx.lineTo(220, 210)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath() //window
    ctx.fillStyle = "gray"
    ctx.rect(90, 110, 60, 70)
    ctx.fill()
    ctx.stroke()

    //school
    ctx.beginPath() //main building
    ctx.fillStyle = "blue"
    ctx.rect(2800, 5, 200, 450)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath() //roof
    ctx.moveTo(2800, 300)
    ctx.lineTo(2800, 250)
    ctx.lineTo(2680, 250)
    ctx.lineTo(2800, 300)
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.stroke()
    ctx.beginPath() //window
    ctx.fillStyle = "gray"
    ctx.rect(2910, 150, 80, 90)
    ctx.fill()
    ctx.stroke()
}