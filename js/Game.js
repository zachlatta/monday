Monday.Game = function (game) {
  this.background;
  this.background2;
  this.dino;
  this.cursors;
  this.jumpButton;
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

  this.score = 0;

  this.cursors = {
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D
  };
  this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

Monday.Game.prototype.update = function () {
  this.dino.body.velocity.x = 0;
  this.background.x += 1;
  this.background2.x += 1;

  if (this.input.keyboard.isDown(this.cursors.left)) {
    this.dino.body.velocity.x = -150;
  } else if (this.input.keyboard.isDown(this.cursors.right)) {
    this.dino.body.velocity.x = 150;
  }

  if (this.jumpButton.isDown && this.dino.body.onFloor()) {
    this.dino.body.velocity.y = -400;
  }

  // Background scolling
  if (this.background.x > 640) {
    console.log('1')
    this.background.x = this.background2.x - this.background.width;
  }
  if (this.background2.x > 640) {
    console.log('2')
    this.background2.x = this.background.x - this.background.width;
  }
};
