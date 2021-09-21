let x = 0
let y = 4
for (let index = 0; index < 25; index++) {
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        x += 1
    }
    x = 0
    y += -1
}
basic.forever(function () {
	
})
