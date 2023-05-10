//M1 levy motor 
//M4 pravy motor 

const centerP: DigitalPin = DigitalPin.P15;
let p1: number = 0
basic.forever(function() {
    p1 = pins.digitalReadPin(centerP)
    console.log(p1)
    basic.pause(10) 
})

input.onButtonPressed(Button.A, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 90) 
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
})


input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
});;