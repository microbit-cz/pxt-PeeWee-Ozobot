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
let speedL: number = 90
let speedR: number = 90
pins.setPull(centerP, PinPullMode.PullNone)
pins.setPull(rightP, PinPullMode.PullNone)
pins.setPull(leftP, PinPullMode.PullNone)

input.onButtonPressed(Button.A, function (){
    basic.forever(function() {
        center = pins.digitalReadPin(centerP);
        right = pins.digitalReadPin(rightP);
        left = pins.digitalReadPin(leftP);
        // console.logValue("center", center)
        // console.logValue("right", right)
        // console.logValue("left", left)
        // basic.pause(50)
        if (center == 1) {
            if (left == 0 && right == 0){
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
            }
            // if (left == 0 && right == 1) {
            //     PCAmotor.MotorRun(PCAmotor.Motors.M1, 70)
            //     PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
            // }
            // if (left == 1 && right == 0) {
            //     PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
            //     PCAmotor.MotorRun(PCAmotor.Motors.M4, 70)
            // }

        }
        if (center == 0){
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 70)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 70)
            if (left == 1 && right == 0) {
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 65)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
            }
            if (left == 0 && right == 1) {
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 65)
            }
        }
    })
})

PlanetX_RGBsensor.readColor()



input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})