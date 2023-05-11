//M1 levy motor 
//M4 pravy motor 
//p15 stred
//p14 leva
//p13 prava


const centerP: DigitalPin = DigitalPin.P15;
const rightP: DigitalPin = DigitalPin.P13;
const leftP: DigitalPin = DigitalPin.P14;
let stred: number = 0
let prava: number = 0
let leva: number = 0
let speedL: number = 90
let speedR: number = 90
pins.setPull(centerP, PinPullMode.PullNone)
pins.setPull(rightP, PinPullMode.PullNone)
pins.setPull(leftP, PinPullMode.PullNone)

input.onButtonPressed(Button.A, function (){
    basic.forever(function() {
        stred = pins.digitalReadPin(centerP);
        prava = pins.digitalReadPin(rightP);
        leva = pins.digitalReadPin(leftP);
        // console.logValue("p1", stred)
        // console.logValue("prava", prava)
        // console.logValue("leva", leva)
        // basic.pause(50)
        if (stred == 1) {
            if (leva == 0 && prava == 0){
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
            }
            if (leva == 0 && prava == 1) {
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 70)
            }
            if (leva == 1 && prava == 0) {
                PCAmotor.MotorRun(PCAmotor.Motors.M1, 70)
                PCAmotor.MotorRun(PCAmotor.Motors.M4, 90)
            }

        }
        if (stred == 0){
            PCAmotor.MotorStopAll()
        }
    })
})




// input.onButtonPressed(Button.A, function() {
//     if(stred == 1){
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, 200)
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
//     } 
// })


// input.onButtonPressed(Button.B, function () {
//     PCAmotor.MotorStopAll()
// });;