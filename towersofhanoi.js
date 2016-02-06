function HanoiGame() {
  this.stacks = [[1, 2, 3], [], []];
  // this.stacks = [[], [1,2,3], []];
  // this.promptMove = function(callback) {
  //    console.log(this.stacks);
  //    var startTowerIdx = prompt("Start Tower?");
  //    var endTowerIdx = prompt("End Tower?");
  //    console.log(startTowerIdx, endTowerIdx);
  //  };
}

HanoiGame.prototype.promptMove = function() {
   console.log(this.stacks);
   var startTowerIdx = prompt("Start Tower?");
   var endTowerIdx = prompt("End Tower?");
   return [startTowerIdx, endTowerIdx];
 };

 HanoiGame.prototype.run = function (completionCallback) {
   while(!this.isWon()){
    this.move(this.promptMove());
   }
  //  console.log("You won!");
   completionCallback();
 };

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  if ((this.stacks[startTowerIdx].length !== 0)
      && (endTowerIdx - startTowerIdx === 1 || endTowerIdx - startTowerIdx === -1 )
      && ((this.stacks[startTowerIdx][0] < this.stacks[endTowerIdx][0]) || this.stacks[endTowerIdx].length === 0))
      {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (position) {
  if (this.isValidMove(position[0], position[1])) {
    var disc = this.stacks[position[0]].shift();
    this.stacks[position[1]].unshift(disc);
  }
  this.print();
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.isWon = function () {
  return ((this.stacks[1].length === 3) || (this.stacks[2].length === 3));
};

var game = new HanoiGame();
game.run(function () {
  console.log("You won!");
});
