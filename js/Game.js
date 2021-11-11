class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    player1=createSprite(width / 4 - 200, height-300 );
      player1.addImage("playerpic",playerimg);
      player2=createSprite(width / 3 + 600, height -300);
      player2.addImage("playerpic2",playerimg2);
      player3=createSprite(width/2+800,height-300);
      player3.addImage("playerpic3",playerimg3);
      player4=createSprite(width/3+100,height-200);
      player4.addImage("playerpic4",playerimg4);
      players=[player1,player2,player3,player4];
    //drawSprites();
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

  }
  handleControls(){
    if(keyDown("LEFT_ARROW")){
      player.x-=5;
    }
    if(keyDown("RIGHT_ARROW")){
      player.x+=5;
    }
    if(keyDown("UP_ARROW")){
      player.y-=5;
    }
    if(keyDown("DOWN_ARROW")){
      player.y+=5;
    }
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();
    this.handleControls();
    if(allPlayers!==undefined){
      image(gameimage,0,0,width,height);
      
    drawSprites();
  }}

}
