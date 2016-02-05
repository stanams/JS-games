function HanoiGame() {
  this.stacks = [[1, 2, 3], [], []];
  var that = this;
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
   console.log(startTowerIdx, endTowerIdx);
   console.log(this.isValidMove(startTowerIdx, endTowerIdx));
 };

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  console.log(this.stacks);
  if ((this.stacks[startTowerIdx].length !== 0)
      && (endTowerIdx - startTowerIdx === 1 || endTowerIdx - startTowerIdx === -1 )
      && ((this.stacks[startTowerIdx][0] < this.stacks[endTowerIdx][0]) || this.stacks[endTowerIdx].length === 0))
      {
    return true;
  } else {
    return false;
  }

};

// HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
//   if (va) {
//
//   }
// };
