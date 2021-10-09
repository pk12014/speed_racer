input.onButtonPressed(Button.A, function () {
    player.move(-1)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    if (player.isTouchingEdge()) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    if (player.isTouchingEdge()) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
let score = 0
let player: game.LedSprite = null
player = game.createSprite(1, 4)
let enemy = game.createSprite(2, 1)
let fall_speed = 500
basic.forever(function () {
    while (!(game.isGameOver())) {
        basic.pause(fall_speed)
        enemy.change(LedSpriteProperty.Y, 1)
        if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X) && enemy.get(LedSpriteProperty.Y) == player.get(LedSpriteProperty.Y)) {
            game.setScore(score)
            game.gameOver()
            basic.showLeds(`
                . # # # .
                # # # # #
                # . # . #
                . # # # .
                . # # # .
                `)
        }
        score += 1
        if (enemy.get(LedSpriteProperty.Y) == 4) {
            basic.pause(fall_speed)
            enemy.set(LedSpriteProperty.Y, 0)
            enemy.set(LedSpriteProperty.X, randint(0, 4))
            if (fall_speed > 150) {
                fall_speed += -10
            }
        }
    }
})
