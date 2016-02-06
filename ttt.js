// var readline = require('readline');
//
// var reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });


function Board(){
    this.grid = new Array;
    for (var i = 0; i <= 2; i++) {
      this.grid.push((new Array(3)));
    }

}

Board.prototype.won = function() {
  // #grid win logic
};

Board.prototype.winner = function() {
  // refer to won method
  // #last player who played, before game won
};

Board.prototype.empty = function(x,y) {
  return (typeof this.grid[x][y] === 'undefined');
};

Board.prototype.placeMark = function(position, symbol) {
  var x = position[0];
  var y = position[1];

  if (this.empty(x,y)) {
    this.grid[x][y] = symbol;
  }
};

Board.prototype.print = function () {
  console.log(JSON.stringify(this.grid));
};


function Game(){
  this.grid = new Board();
  this.player1 = new Player("x");
  this.player2 = new Player("o");
  console.log(this.grid);
}

Game.prototype.play = function () {
  this.grid.placeMark(this.promptMove(), 'x');
  // we hard coded that 'x' TODO: change it with currentPlayer.symbol
  this.changePlayer();
};

Game.prototype.promptMove = function () {
  var x = prompt("Column?");
  var y = prompt("Row?");
  return [x, y];
};

Game.prototype.currentPlayer = function () {
  this.currentPlayer = this.changePlayer();

};

Game.prototype.changePlayer = function () {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  return this.currentPlayer;
};


function Player(symbol){
  this.symbol = symbol;
}



var game = new Game();

// reader.question("What is your name?", function (answer) {
//   console.log("Hello " + answer + "!");
// });

// console.log(myBoard.grid);
