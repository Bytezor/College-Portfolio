"use strict"

const theCanvas = new Canvas("gameCanvas", 350, 250)

function KeyPressed(event){
    if (event.key == 'f')  {
       player.Shoot(event.key)
    } else {
       player.Move(event.key)
    }
}

const UPDATE_TIME = 30
function TimeAction() {
    theCanvas.Clear()
 
    player.Draw()
    playerProjectile.Draw()
    for (let i = 1; i < AlienArray.length; i++) {
        AlienArray[i].Move()
        AlienArray[i].Draw()
    }
 
    timer = setTimeout(TimeAction,UPDATE_TIME)
 }
SetArray()
let player = new Mover(theCanvas.width/2, theCanvas.height, theCanvas, 0)
let playerProjectile = new Projectile(-50, -50, theCanvas)
theCanvas.AddListener("keydown", KeyPressed);
let timer = setTimeout(TimeAction, UPDATE_TIME)