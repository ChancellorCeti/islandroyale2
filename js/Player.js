class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2  + 50;
    } 
    if (this.index === 2) {
      this.positionX = width / 2 + 100;
    } 
    if (this.index === 3) {
      this.positionX = width / 2 - 100;
    } else{
      this.positionX=width/2-50
    }


    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",data=>{
      allPlayers=data.val();
    });
  }
}
  

