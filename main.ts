//M1 levy motor 
//M4 pravy motor 
//p15 stred
//p14 leva
//p13 prava


const centerP: DigitalPin = DigitalPin.P15;
const rightP: DigitalPin = DigitalPin.P13;
const leftP: DigitalPin = DigitalPin.P14;
let center: number = 0
let right: number = 0
let left: number = 0
let speed1: number = 70
let speed2: number = 70

let time = 0
pins.setPull(centerP, PinPullMode.PullNone)
pins.setPull(rightP, PinPullMode.PullNone)
pins.setPull(leftP, PinPullMode.PullNone)

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
    speed1 = 70
    speed2 = 70
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}

function turnLeft(){
    speed1 = 55
    speed2 = 75
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    // if(center == 1){

    // }
}

function turnRight() {
    speed1 = 75
    speed2 = 55
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}


    basic.forever(function () {
        center = pins.digitalReadPin(centerP);
        right = pins.digitalReadPin(rightP);
        left = pins.digitalReadPin(leftP);
        // console.logValue("center", center)
        // console.logValue("right", right)
        // console.logValue("left", left)
        // basic.pause(50)
        if (center == 1) {
            if (left == 0 && right == 0) {
                forward()
            }
        }
        // if (center == 0) {
            if (right == 0 && left == 1){
                turnLeft() 
                
            }
            else if (right == 1 && left == 0){
               turnRight()
            
            }
        // }
    })




input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})
