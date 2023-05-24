let azul = 0
let vermelho = 0
// azul
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    if (azul <= 255) {
        azul = azul + 5
    } else {
        azul = 0
    }
})
// verde
pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
	
})
// vermelho
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    if (vermelho <= 255) {
        vermelho = vermelho + 5
    } else {
        vermelho = 0
    }
})
basic.forever(function () {
	
})
