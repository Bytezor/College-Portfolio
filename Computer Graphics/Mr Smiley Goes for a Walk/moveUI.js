"use strict"

let timer = null

function MoveWorld(event) {
    let key = event.key
    let stopMove = true

    switch(key) {
        case 'x':
            if (timer == null) {
                StartTicks()
            } else {
                StopTicks()
            }
            stopMove = false
            break
        case 'd':
        case 'l':
            if (worldTx > -2500) {
                worldTx -= 10
                console.log(worldTx)
            }
            break
        case 'a':
        case 'j':
            if (worldTx < 0) {
                worldTx += 10
            }
            break
        case 'p':
            if (timer == null) {
                StartTicks()
             } else {
                StopTicks()
             }
             stopMove = false
             break
    }
    if (stopMove && timer==null) {
        DrawScene()
    }
}

function Tick() {


    DrawScene()
}

function StartTicks() {
    timer = setInterval(Tick, 50)
}

function StopTicks() {
    if (timer != null) {
        clearInterval(timer)
        timer = null
    }
}