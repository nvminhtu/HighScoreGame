var gameOver = function(game){}

gameOver.prototype = {
		init: function(score){
			alert(score);
			if (!localStorage.highest_score || score > localStorage.highest_score) {
	        localStorage.highest_score = score;
	    }

		},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		  gameOverTitle.anchor.setTo(0.5,0.5);

			// starting show High Score

			var textDisplay = localStorage.highest_score;
	    // show text Highscore in frontend
	    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	    var text = this.game.add.text(0, 0, textDisplay, style);
			// end show High Score

			var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		  playButton.anchor.setTo(0.5,0.5);


	},
	playTheGame: function(){
		this.game.state.start("TheGame");

	}
}
