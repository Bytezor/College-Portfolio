"use strict"

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height

canvas.tabIndex = 0
canvas.addEventListener("keydown", MoveWorld)

let worldTx = 0
let worldTy = 0

let Smiley = new Person(width/2, 50)
let Fences = []
for(let i = 0; i < 3000; i += 100) {
    Fences[i/100] = new Fence(i, 275)
}
let Stars = []
for(let i = 0; i < 100; i++) {
    Stars[i] = new Star(Math.floor(Math.random() * 3000), Math.floor(Math.random() * (500 - 300) + 300), 30)
}
let Couple1 = new Couple(500, 100)
let Couple2 = new Couple(2400, 75)

let Seesaw1 = new Seesaw(850, 200, Math.floor(Math.random() * (18 + 18 + 1)) - 18)
let Seesaw2 = new Seesaw(1600, 75, Math.floor(Math.random() * (18 + 18 + 1)) - 18)

let Swing1 = new Swing(1100, 300, Math.floor(Math.random() * ((9 + 10)) - 9) * 5)
let Swing2 = new Swing(2000, 400, Math.floor(Math.random() * ((9 + 10)) - 9) * 5)

DrawScene()