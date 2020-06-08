namespace SpriteKind {
    export const Name = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Ha.destroy()
    U_re_not_my_friend.destroy(effects.fire, 100)
    info.setScore(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    U_re_not_my_friend = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, Mk, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Mk.destroy()
    info.changeLifeBy(-1)
})
let U_re_not_my_friend: Sprite = null
let Ha: Sprite = null
let Mk: Sprite = null
Mk = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
Mk.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(Mk, 200, 200)
game.onUpdateInterval(500, function () {
    Ha = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 d b f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
. . . . . . f d 1 1 1 1 1 d d d d f . . . . . . 
. . . . . . f d 1 1 d d d d d d d f . . . . . . 
. . . . . . f 1 1 1 d d d d d d d f . . . . . . 
. . . . . . f 1 1 f c d d d d d d f . . . . . . 
. . . . . f b 1 1 1 1 b d d d b f . . . . . . . 
. . . . . f 1 b 1 b d f c f f f . . . . . . . . 
. . . . . f b f b f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f . f f . . . . 
. . . . . . . . . . . f f f f f f f f . . . . . 
. . . . . . . . f 1 b 1 b f f f f f f . . . . . 
. . . . . . . . f b f b f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Ha.setVelocity(-100, 0)
    Ha.setPosition(180, Math.randomRange(0, 180))
})
