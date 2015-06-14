Monday.Preloader = function (game) {
  this.background;
  this.preloadBar;

  this.ready;
}

Monday.Preloader.prototype.preload = function () {
  this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');

  this.load.setPreloadSprite(this.preloadBar);

  this.load.image('background', 'assets/background.jpg');
  this.load.image('dinoClide', 'assets/dinoClide.png');
};

Monday.Preloader.prototype.create = function () {
  this.preloadBar.cropEnabled = false;
  this.state.start('Game');
};

Monday.Preloader.prototype.update = function () {
};
