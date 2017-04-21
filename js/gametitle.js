// Màn hình chờ của game - trước khi play
var gameTitle = function(game){}

gameTitle.prototype = {
  create: function() {
    var gameTitle = this.game.add.sprite(160,160,"gametitle");
  	gameTitle.anchor.setTo(0.5,0.5);


    if (!localStorage.highest_score) {
      localStorage.highest_score = 0;
    }

    var textDisplay = "High Score: " + localStorage.highest_score;
    // show text Highscore in frontend
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = this.game.add.text(0, 0, textDisplay, style);

    var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
    // tạo ra 1 button play, và cho click chay đến hàm PlayTheGame
  },
  playTheGame: function() {
    this.game.state.start("TheGame");
  }
}
