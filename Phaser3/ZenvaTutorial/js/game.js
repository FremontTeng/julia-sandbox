// create a new scene
let gameScene = new Phaser.Scene('Game');

//Load Assets
gameScene.preload = function(){
  //Load Images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
};

//Called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
 
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;

  //Change origin
  //bg.setOrigin(0,0);

  // place player sprite
  bg.setPosition(gameW/2, gameH/2);
  let player = this.add.sprite(70, 180, 'player');
  //player.depth = 1;
  //player.x = 10;
  //player.y = 10;

  //Scaling of player
  player.setScale(2);


  //Create enemu
  let enemy = this.add.sprite(250,180,'enemy');

  enemy.scaleX = 2;
  enemy.scaleY = 2;
}

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
