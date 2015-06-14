Monday.Preloader = function (game) {
  this.background;
  this.preloadBar;

  this.ready;
}

Monday.Preloader.prototype.preload = function () {
  this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');

  this.load.setPreloadSprite(this.preloadBar);

  this.load.image('background', 'assets/background.jpg');
  this.load.image('cloud1', 'assets/cloud1.png');
  this.load.image('cloud2', 'assets/cloud2.png');
  this.load.image('cloud3', 'assets/cloud3.png');
  this.load.image('dinoClide', 'assets/dinoClide.png');
  this.load.spritesheet('lightningBolt', 'assets/lightningBolt.png', 68, 300, 6);
};

Monday.Preloader.prototype.create = function () {
  this.preloadBar.cropEnabled = false;
  this.state.start('Game');
};

Monday.Preloader.prototype.update = function () {
};
