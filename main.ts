music.setTempo(120)
basic.forever(function () {
    if (input.lightLevel() < 80) {
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (input.lightLevel() < 160) {
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
})
