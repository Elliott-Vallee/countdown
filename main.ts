for (let index = 0; index <= 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("GO!")
basic.forever(function () {
	
})
