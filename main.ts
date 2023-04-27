
basic.clearScreen()

input.onButtonPressed(Button.A, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
})

input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorStopAll()
})