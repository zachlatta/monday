Monday.Game = function (game) {
  this.dino;
  this.cursors;
  this.jumpButton;
};

Monday.Game.prototype.create = function () {
  this.physics.startSystem(Phaser.Physics.ARCADE);

  this.add.image(0, 0, 'background');
  this.add.image(25, 30, 'cloud1');
  this.add.image(500, 130, 'cloud2');
  this.add.image(200, 175, 'cloud3');
  this.add.image(350, 25, 'cloud3');

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

  if (this.input.keyboard.isDown(this.cursors.left)) {
    this.dino.body.velocity.x = -150;
  } else if (this.input.keyboard.isDown(this.cursors.right)) {
    this.dino.body.velocity.x = 150;
  }

  if (this.jumpButton.isDown && this.dino.body.onFloor()) {
    this.dino.body.velocity.y = -400;
  }
};
