input.onButtonPressed(Button.A, function () {
    if (xspieler > 0) {
        led.unplot(xspieler, 4)
        xspieler = xspieler - 1
        led.plot(xspieler, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (xspieler < 4) {
        led.unplot(xspieler, 4)
        xspieler = xspieler + 1
        led.plot(xspieler, 4)
    }
})
let xspieler = 0
xspieler = 2
led.plot(xspieler, 4)
