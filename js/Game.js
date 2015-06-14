Monday.Game = function (game) {
  this.dino;
  this.cursors;
  this.jumpButton;
  this.jumpTimer = 0;
};

Monday.Game.prototype.create = function () {
  this.physics.startSystem(Phaser.Physics.ARCADE);

  this.add.image(0, 0, 'background');

  this.physics.arcade.gravity.y = 250;

  this.dino = this.add.sprite(0, 0, 'dinoClide');
  this.physics.enable(this.dino, Phaser.Physics.ARCADE);

  this.dino.body.collideWorldBounds = true;

  this.score = 0;

  this.cursors = this.input.keyboard.createCursorKeys();
  this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

Monday.Game.prototype.update = function () {
  this.dino.body.velocity.x = 0;

  if (this.cursors.left.isDown) {
    this.dino.body.velocity.x = -150;
  } else if (this.cursors.right.isDown) {
    this.dino.body.velocity.x = 150;
  }

  if (this.jumpButton.isDown && this.dino.body.onFloor() && this.time.now > this.jumpTimer) {
    this.dino.body.velocity.y = -250;
    this.jumpTimer = this.time.now + 750;
  }
};
