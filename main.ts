controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipSprite.setImage(assets.tile`ShipUp`)
    ShipSprite.setVelocity(0, -50)
    PlayerDirection = 0
})
function CreatePlayer () {
    ShipSprite = sprites.create(assets.tile`ShipUp`, SpriteKind.Player)
    tiles.placeOnTile(ShipSprite, tiles.getTileLocation(1, 1))
    scene.cameraFollowSprite(ShipSprite)
    ShipSprite.startEffect(effects.trail)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.smallCrash.play()
    if (PlayerDirection == 0) {
        PlayerProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpDown`, ShipSprite, 0, -100)
    } else if (PlayerDirection == 1) {
        PlayerProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpLeftRight`, ShipSprite, 100, 0)
    } else if (PlayerDirection == 2) {
        PlayerProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpDown`, ShipSprite, 0, 100)
    } else {
        PlayerProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpLeftRight`, ShipSprite, -100, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == EnemyProjectile) {
        music.bigCrash.play()
        otherSprite.startEffect(effects.disintegrate)
        otherSprite.destroy()
        game.over(false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipSprite.setImage(assets.tile`ShipLeft`)
    ShipSprite.setVelocity(-50, 0)
    PlayerDirection = 3
})
function EnemyChangeDirection () {
    ValidDirection = false
    while (ValidDirection == false) {
        EnemyDirection = randint(0, 3)
        if (EnemyDirection == 0) {
            if (EnemySprite.tileKindAt(TileDirection.Top, assets.tile`transparency16`)) {
                ValidDirection = true
            }
        } else if (EnemyDirection == 1) {
            if (EnemySprite.tileKindAt(TileDirection.Right, assets.tile`transparency16`)) {
                ValidDirection = true
            }
        } else if (EnemyDirection == 2) {
            if (EnemySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
                ValidDirection = true
            }
        } else {
            if (EnemySprite.tileKindAt(TileDirection.Left, assets.tile`transparency16`)) {
                ValidDirection = true
            }
        }
    }
    if (EnemyDirection == 0) {
        EnemySprite.setImage(assets.tile`EnemyUp`)
        EnemySprite.setVelocity(0, -50)
    } else if (EnemyDirection == 1) {
        EnemySprite.setImage(assets.tile`EnemyRight`)
        EnemySprite.setVelocity(50, 0)
    } else if (EnemyDirection == 2) {
        EnemySprite.setImage(assets.tile`EnemyDown`)
        EnemySprite.setVelocity(0, 50)
    } else {
        EnemySprite.setImage(assets.tile`EnemyLeft`)
        EnemySprite.setVelocity(-50, 0)
    }
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    EnemyChangeDirection()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipSprite.setImage(assets.tile`ShipRight`)
    ShipSprite.setVelocity(50, 0)
    PlayerDirection = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ShipSprite.setImage(assets.tile`ShipDown`)
    ShipSprite.setVelocity(0, 50)
    PlayerDirection = 2
})
function CreateEnemy () {
    EnemySprite = sprites.create(assets.tile`EnemyUp`, SpriteKind.Enemy)
    tiles.placeOnTile(EnemySprite, tiles.getTileLocation(1, 10))
    EnemyMove = true
    EnemySprite.startEffect(effects.fire)
    EnemyChangeDirection()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == PlayerProjectile) {
        music.bigCrash.play()
        otherSprite.startEffect(effects.disintegrate)
        otherSprite.destroy()
        game.over(true)
    }
})
let EnemyMove = false
let EnemySprite: Sprite = null
let EnemyDirection = 0
let ValidDirection = false
let EnemyProjectile: Sprite = null
let PlayerProjectile: Sprite = null
let PlayerDirection = 0
let ShipSprite: Sprite = null
effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level1`)
CreatePlayer()
CreateEnemy()
forever(function () {
    pause(1000)
    if (randint(0, 10) > 4) {
        music.knock.play()
        if (EnemyDirection == 0) {
            EnemyProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpDown`, EnemySprite, 0, -100)
        } else if (EnemyDirection == 1) {
            EnemyProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpLeftRight`, EnemySprite, 100, 0)
        } else if (EnemyDirection == 2) {
            EnemyProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpDown`, EnemySprite, 0, 100)
        } else {
            EnemyProjectile = sprites.createProjectileFromSprite(assets.tile`BulletUpLeftRight`, EnemySprite, -100, 0)
        }
    }
})
