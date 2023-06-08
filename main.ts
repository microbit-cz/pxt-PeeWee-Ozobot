//M1 levy motor 
//M4 pravy motor 
//p15 stred
//p14 leva
//p13 prava


const centerP: DigitalPin = DigitalPin.P15;
const rightP: DigitalPin = DigitalPin.P13;
const leftP: DigitalPin = DigitalPin.P14;
let center: boolean = true
let right: boolean = false
let left: boolean = false
let speed1: number = 70
let speed2: number = 70
let time = 0
let whiteLine: number = 0
pins.setPull(centerP, PinPullMode.PullNone)
pins.setPull(rightP, PinPullMode.PullNone)
pins.setPull(leftP, PinPullMode.PullNone)
music.setVolume(255)

function stableLeft() {
        time = control.millis()
        speed2 = 67
        if (control.millis() == time + 20) {
        time = 0
        speed1 = 70
        speed2 = 70
        }
}
function stableRight() {
        time = control.millis()
        speed1 = 67
        if (control.millis() == time + 20) {
        time = 0
        speed1 = 70
        speed2 = 70
        }
}

function forward(){
    speed1 = 100
    speed2 = 100
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    // control.inBackground(function() {
    //     music.playTone(Note.C, music.beat(10))
    // })
    // basic.showLeds(`
    //     . . # . .
    //     . # # # .
    //     # . # . #
    //     . . # . .
    //     . . # . .
    //     `)
}

function turnLeft(){
    speed1 = -80
    speed2 = 80
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    // control.inBackground(function() {
    //     music.playTone(Note.G, music.beat(10))
    // })
    // basic.showLeds(`
    //     . . # . .
    //     . # . . .
    //     # # # # #
    //     . # . . .
    //     . . # . .
    //     `)
}

function turnRight() {
    speed1 = 80
    speed2 = -80
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    // basic.showLeds(`
    //     . . # . .
    //     . . . # .
    //     # # # # #
    //     . . . # .
    //     . . # . .
    //     `)
}


basic.forever(function () {
    center = (whiteLine ^ pins.digitalReadPin(centerP)) == 0 ? false : true;
    right = (whiteLine ^ pins.digitalReadPin(rightP)) == 0 ? false : true;
    left = (whiteLine ^ pins.digitalReadPin(leftP)) == 0 ? false : true;
    if(right){
        turnRight()
    }
    else if(left){
        turnLeft()
    
    }
    else if(!center){
        control.inBackground(function() {
            music.playTone(Note.F, music.beat(10))
        })
    }
    else{
        forward()
    }
})

input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})
