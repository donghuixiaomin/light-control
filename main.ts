let lightness = 0
let strip = Microbit.create(Write_pin.w0)
Microbit.init()
basic.forever(function () {
    Microbit.showNumber(Oled.oled1, Microbit.potentiometerRead(Read_pin.r1))
    lightness = Math.map(Microbit.potentiometerRead(Read_pin.r0), 0, 1024, 0, 256)
    strip.showColor(Microbit.colors(NeoPixelColors.White))
    strip.setBrightness(lightness)
})
