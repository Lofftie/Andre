input.onGesture(Gesture.LogoUp, function () {
    dot2.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    dot2.change(LedSpriteProperty.X, -1)
    x += -1
})
input.onGesture(Gesture.TiltRight, function () {
    dot2.change(LedSpriteProperty.X, 1)
    x += 1
})
input.onGesture(Gesture.LogoDown, function () {
    dot2.change(LedSpriteProperty.Y, -1)
    y += -1
})
let dot2: game.LedSprite = null
game.setScore(0)
let dot1 = game.createSprite(randint(0, 4), randint(0, 4))
dot2 = game.createSprite(2, 2)
let x = 2
let y = 2
basic.forever(function () {
    if (dot1.isTouching(dot2)) {
        game.addScore(1)
        basic.showNumber(game.score())
        basic.pause(500)
        dot1.delete()
        dot1 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (x < 0 || x > 4 || (y > 4 || y < 0)) {
        game.gameOver()
    }
})
