import { createAnimations } from "./animations.js"

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

new Phaser.Game(config)

function preload () {

    this.load.spritesheet(
        'firebackground',
        'assets/scenery/overworld/firebackground-spritesheet.png',
        { frameWidth: 256, frameHeight: 244 }
    )

    this.load.spritesheet(
        'nubemuerte',
        'assets/scenery/overworld/nubemuerte.png',
        { frameWidth: 32, frameHeight: 32 }
    )


    this.load.image(
        'floorbricks',
        'assets/scenery/overworld/floorbricks.png'
    )

    this.load.spritesheet(
        'rockcaracter1',
        'assets/entities/rockcaracter1.png',
        { frameWidth: 16, frameHeight: 16 }
    )
    
    this.load.audio('gameover', 'assets/sound/music/gameover.mp3')
    this.load.audio('jump', 'assets/sound/effects/jump.mp3')
    this.load.audio('hardrock', 'assets/sound/music/overworld/hardrock.mp3')


    
}

function create () {
    this.firebackground = this.add.sprite(0, 0, 'firebackground')
    .setOrigin(0, 0)
    .setScale(1.2)
    

    

    this.sound.add('hardrock', { volume: 0.3 }).play()

    

    

    this.rockcaracter1 = this.physics.add.sprite(50, 100, 'rockcaracter1')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(300)

    this.floor = this.physics.add.staticGroup()

    this.floor
        .create(0, config.height -16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()

    this.floor
        .create(150, config.height -16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()

    this.floor
        .create(300, config.height -16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()

    this.floor
        .create(450, config.height -16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody()

    this.nubemuerte = this.add.sprite(60, 100, 'nubemuerte')
    .setOrigin(0, 1);
    
    

    

    

    // this.mario = this.add.sprite(50, 210, 'mario')
    // .setOrigin(0, 1)

    
    
        // THIS PHYSICS
    
    
    this.physics.world.setBounds(0, 0, 2000, config.height)
    this.physics.add.collider(this.rockcaracter1, this.floor)

    this.cameras.main.setBounds(0, 0, 2000, config.height)
    this.cameras.main.startFollow(this.rockcaracter1)

    createAnimations(this)

    this.keys = this.input.keyboard.createCursorKeys()

    

    
}



function update () {

    
        this.nubemuerte.anims.play('nubemuerte-background', true)
        this.firebackground.anims.play('firebackground-spritesheet', true)

    

    if (this.rockcaracter1.isDead) return

    if (this.keys.left.isDown && this.rockcaracter1.body.touching.down) {
        this.rockcaracter1.x -= 2
        this.rockcaracter1.flipX = true
        this.rockcaracter1.anims.play('rockcaracter1-walk', true)
    } else if (this.keys.left.isDown) {
        this.rockcaracter1.x -= 2
        this.rockcaracter1.flipX = true
        this.rockcaracter1.anims.play('rockcaracter1-jump', true)
    
    } else if (this.keys.right.isDown && this.rockcaracter1.body.touching.down) {
        this.rockcaracter1.x += 2
        this.rockcaracter1.flipX = false
        this.rockcaracter1.anims.play('rockcaracter1-walk', true)
        
    // } else if (this.keys.right.isDown && this.keys.shift.isDown) {
    //     this.mario.x += 4
    //     this.mario.anims.play('mario-walk', true)
    } else if (this.keys.right.isDown) {
        this.rockcaracter1.x += 2
        this.rockcaracter1.flipX = false
        this.rockcaracter1.anims.play('rockcaracter1-jump', true)
        
    
    } else {
        this.rockcaracter1.anims.play('rockcaracter1-idle', true)
    }

    if (this.keys.up.isDown && this.rockcaracter1.body.touching.down) {
        this.rockcaracter1.setVelocityY(-300)
        this.rockcaracter1.anims.play('rockcaracter1-jump', true)
        this.sound.add('jump', { volume: 0.05 }).play()
    } else if (this.rockcaracter1.body.touching.down == false) {
        
        this.rockcaracter1.anims.play('rockcaracter1-jump', true)
        
    }


    if (this.rockcaracter1.y >= config.height) {
        this.rockcaracter1.isDead = true
        this.rockcaracter1.anims.play('rockcaracter1-dead')
        this.rockcaracter1.setCollideWorldBounds(false)
        this.sound.add('gameover', { volume: 0.2 }).play()
        
        
        

        setTimeout(() => {
            this.rockcaracter1.setVelocityY(-350)
        }, 100)

        setTimeout(() => {
            this.game.restart()
        }, 3000)
    }

    
}
