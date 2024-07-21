export const createAnimations = (game) => {

    game.anims.create({
        key: 'firebackground-spritesheet',
        frames: game.anims.generateFrameNumbers(
            'firebackground',
            { start: 0, end: 28 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'nubemuerte-background',
        frames: game.anims.generateFrameNumbers(
            'nubemuerte',
            { start: 0, end: 9 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'rockcaracter1-walk',
        frames: game.anims.generateFrameNumbers(
            'rockcaracter1',
            { start: 45, end: 48 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'rockcaracter1-idle',
        frames: game.anims.generateFrameNumbers(
            'rockcaracter1',
            { start: 0, end: 31 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'rockcaracter1-jump',
        frames: game.anims.generateFrameNumbers(
            'rockcaracter1',
            { start: 32, end: 44 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'rockcaracter1-dead',
        frames: [{ key: 'rockcaracter1', frame: 4 }]
    })

    game.anims.create({
        key: 'floorbricksfire-fire',
        frames: game.anims.generateFrameNumbers(
            'floorbricksfire',
            { start: 0, end: 8 }
        ),
        frameRate: 12,
        repeat: -1
    })
    
}

