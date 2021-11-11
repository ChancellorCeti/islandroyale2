var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameimage;
var allPlayers;
var playerimg2;
var playerimg3;
var playerimg4;
var playerimg;
var player1,player2,player3,player4;
var players=[];
var gameState=0;

function preload() {
  backgroundImage = loadImage("./assets/island.jpg");
  gameimage=loadImage("./assets/gameimage.jpg");
  playerimg=loadImage("./assets/playerimg.png");
  playerimg2=loadImage("./assets/playerimg1.png");
  playerimg3=loadImage("./assets/playerimg2.png");
  playerimg4=loadImage("./assets/playerimg3.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
