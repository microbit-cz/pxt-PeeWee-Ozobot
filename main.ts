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
let speed: number = 75
let speedTurn: number = 65
pins.setPull(centerP, PinPullMode.PullNone)
pins.setPull(rightP, PinPullMode.PullNone)
pins.setPull(leftP, PinPullMode.PullNone)

input.onButtonPressed(Button.A, function () {
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
                speed = 70
                PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, speed)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            }
        }
        if (center == 0) {
            if (right == 0 && left == 1){
                speed = 75
                speedTurn = 50
                PCAmotor.MotorRun(PCAmotor.Motors.M1, speedTurn)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, speed)
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
            }
            if (right == 1 && left == 0){
                speed = 75
                speedTurn = 50
                PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, speedTurn)
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            }
        }  
        // if (right == 0 && left == 1) {
        //     speed = 70
        //     speedTurn = 40
        //     // if (center == 0) {
        //     //     speedTurn = 45
        //     //     speed = 70
        //     // }
        //     PCAmotor.MotorRun(PCAmotor.Motors.M1, speedTurn)
        //     PCAmotor.MotorRun(PCAmotor.Motors.M4, speed)
        //     basic.showLeds(`
        //             . . # . .
        //             . # . . .
        //             # # # # #
        //             . # . . .
        //             . . # . .
        //             `)
        // }
        // if (right == 1 && left == 0) {
        //     speed = 70
        //     speedTurn = 40
        //     // if (center == 0) {
        //     //     speedTurn = 45
        //     //     speed = 70
        //     // }
        //     PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        //     PCAmotor.MotorRun(PCAmotor.Motors.M4, speedTurn)
        //     basic.showLeds(`
        //             . . # . .
        //             . . . # .
        //             # # # # #
        //             . . . # .
        //             . . # . .
        //             `)
        // }

    
    })
})




input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})
