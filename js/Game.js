Monday.Game = function (game) {
  this.background;
  this.background2;

  this.dino;
  this.cursors;
  this.jumpButton;

  this.lightningBolts;
  this.fireRate = 500;
  this.nextFire = 0;
};

Monday.Game.prototype.create = function () {
  this.physics.startSystem(Phaser.Physics.ARCADE);

  this.background = this.add.group();
  this.background2 = this.add.group();

  [this.background, this.background2].forEach(function (background) {
    background.create(0, 0, 'background');
    background.create(125, 30, 'cloud1');
    background.create(700, 130, 'cloud2');
    background.create(400, 175, 'cloud3');
    background.create(550, 25, 'cloud3');
  });

  this.background2.x = this.background.x - this.background2.width;

  this.physics.arcade.gravity.y = 300;

  this.dino = this.add.sprite(450, 300, 'dinoClide');
  this.physics.enable(this.dino, Phaser.Physics.ARCADE);

  this.dino.body.collideWorldBounds = true;
  this.dino.body.gravity.y = 1000;
  this.dino.body.maxVelocity.y = 500;

  this.lightningBolts = this.add.group();
  this.lightningBolts.enableBody = true;
  this.lightningBolts.physicsBodyType = Phaser.Physics.ARCADE;
  this.lightningBolts.createMultiple(30, 'lightningBolt');
  this.lightningBolts.setAll('anchor.x', 0.5);
  this.lightningBolts.setAll('anchor.y', 0.5);
  this.lightningBolts.setAll('outOfBoundsKill', true);
  this.lightningBolts.setAll('checkWorldBounds', true);
  this.lightningBolts.callAll('animations.add', 'animations', 'shine');
  this.lightningBolts.callAll('play', null, 'shine', 10, true);

  this.score = 0;

  this.cursors = {
    up: this.input.keyboard.addKey(Phaser.Keyboard.W),
    down: this.input.keyboard.addKey(Phaser.Keyboard.S),
    left: this.input.keyboard.addKey(Phaser.Keyboard.A),
    right: this.input.keyboard.addKey(Phaser.Keyboard.D)
  };
  this.jumpButton = this.cursors.up;
};

Monday.Game.prototype.update = function () {
  this.dino.body.velocity.x = 0;

  this.dino.x += 0.75;
  this.background.x += 1;
  this.background2.x += 1;

  if (this.cursors.left.isDown) {
    this.dino.body.velocity.x = -150;
  } else if (this.cursors.right.isDown) {
    this.dino.body.velocity.x = 150;
  }

  if (this.jumpButton.isDown && this.dino.body.onFloor()) {
    this.dino.body.velocity.y = -400;
  }

  if (this.input.activePointer.isDown) {
    this.fireBolts();
  }

  // Background scolling
  if (this.background.x > 640) {
    this.background.x = this.background2.x - this.background.width;
  }
  if (this.background2.x > 640) {
    this.background2.x = this.background.x - this.background.width;
  }
};

Monday.Game.prototype.fireBolts = function () {
  if (this.time.now > this.nextFire && this.lightningBolts.countDead() > 0) {
    this.nextFire = this.time.now + this.fireRate;
    var bolt = this.lightningBolts.getFirstExists(false);

    if (bolt) {
      bolt.reset(this.dino.x, this.dino.y);
      bolt.rotation = this.physics.arcade.moveToPointer(bolt, 1000, this.input.activePointer, 500) - 80;
    }
  }
};
