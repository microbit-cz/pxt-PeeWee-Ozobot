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

function turnLeft() {
    // if (center == 1) {
        time = control.millis()
        speed2 = 67
        if (control.millis() == time + 20) {
        time = 0
        speed1 = 70
        speed1 = 70
        }
    // }
    
}
function turnRight() {
    // if(center == 1) {
        time = control.millis()
        speed1 = 67
        if (control.millis() == time + 20) {
        time = 0
        speed1 = 70
        speed2 = 70
        }
    // }
    
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
        }
        // if (center == 0) {
            if (right == 0 && left == 1){
                speed1 = 70
                speed2 = 55
                PCAmotor.MotorRun(PCAmotor.Motors.M1, speed2)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, speed1)
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
                if(center == 1){
                   turnLeft() 
                }
            }
            else if (right == 1 && left == 0){
                speed1 = 70
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
                if (center == 1){
                    turnRight()
                }
            }
        // }
    })




input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})
