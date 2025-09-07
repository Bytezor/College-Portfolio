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
   if (player.lives > 0) {
    theCanvas.Clear()
 
    player.Draw()
    playerProjectile.Draw()
    fleet.MoveArray()
    fleet.DrawArray()
    barrier1.DrawBarrier()
    barrier2.DrawBarrier()
    barrier3.DrawBarrier()
    barrier4.DrawBarrier()
    gameExplosions.DrawExplosions()
 
    timer = setTimeout(TimeAction,UPDATE_TIME)
   }
}

let player = new Mover(theCanvas.width/2, theCanvas.height, theCanvas, 0)
document.getElementById("playerHUD").innerHTML = "Score: " + player.score + "\t Lives: " + player.lives;
let playerProjectile = new Projectile(-50, -50, theCanvas)
let fleet = new AlienGroup(0, 0, theCanvas, "right")
fleet.SetArray()
document.getElementById("aliensRemaining").innerHTML = "Aliens Remaining: " + fleet.count;
let barrier1 = new Barrier(25, 200, theCanvas)
barrier1.SetBarrier()
let barrier2 = new Barrier(theCanvas.width/2 - 50, 200, theCanvas)
barrier2.SetBarrier()
let barrier3 = new Barrier(theCanvas.width/2 + 25, 200, theCanvas)
barrier3.SetBarrier()
let barrier4 = new Barrier(theCanvas.width - 50, 200, theCanvas)
barrier4.SetBarrier()
let gameExplosions = new ExplosionArray(theCanvas)
theCanvas.AddListener("keydown", KeyPressed);
let timer = setTimeout(TimeAction, UPDATE_TIME)
const alienFiring = setInterval(fleet.Shoot, 250)
const explosionInterval = setInterval(gameExplosions.UpdateExplosions, 100)