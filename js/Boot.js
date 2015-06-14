Monday = {
  score: 0
};

Monday.Boot = function (game) {
};

Monday.Boot.prototype.preload = function () {
  this.load.image('preloaderBar', 'assets/preload.png');
};

Monday.Boot.prototype.create = function () {
  this.input.maxPointers = 1;

  if (this.game.device.desktop) {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 256;
    this.scale.minHeight = 196;
    this.scale.maxWidth = 512;
    this.scale.maxHeight = 384;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
  } else {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 480;
    this.scale.minHeight = 260;
    this.scale.maxWidth = 1024;
    this.scale.maxHeight = 768;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(true, false);
    this.scale.setResizeCallback(this.gameResized, this);
    this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
    this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    this.scale.setScreenSize(true);
  }

  this.state.start('Preloader');
};

Monday.Boot.prototype.gameResized = function (width, height) {
};
