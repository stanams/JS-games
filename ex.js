function Clock() {
  var myDate = new Date();
  this.hours = myDate.getHours();
  this.minutes = myDate.getMinutes();
  this.seconds = myDate.getSeconds();
  // this.setInterval (this._tick, 1000);
}

Clock.prototype.printTime = function() {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  // this.myDate.setSecond(this.myDate.getSeconds() + 1);
  // this.seconds += 1;
  if (this.minutes === 59 && this.seconds === 59 ){
    this.hours += 1;
    this.minutes = 0;
    this.seconds = 0;
  } else if (this.seconds === 59){
    this.minutes += 1;
    this.seconds = 0;
  } else {
    this.seconds += 1;
  }

  // console.log(this.seconds);
  this.printTime();
};

Clock.prototype.maketime = function () {
  setInterval(this._tick.bind(this), 1000);
};



var clock = new Clock();

clock.maketime();
