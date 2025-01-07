function StopWatch() {
  this.running = false;
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;

  Object.defineProperty(this, "duration", {
    get: () =>
      this.running ? (new Date() - this.startTime) / 1000 : this.duration,
    // return current duration if running
  });
}

// move to Prototype, all private members now must be made public (using this) to be used by
// Prototype methods
StopWatch.prototype.start = function () {
  if (this.running) throw Error("StopWatch is already running");
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) throw Error("StopWatch is not running");
  this.running = false;
  this.endTime = new Date();
  this.duration += (this.endTime - this.startTime) / 1000;
};

StopWatch.prototype.reset = function () {
  this.running = false;
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
};

s = new StopWatch();

// copy paste above code on chrome dev console and then run the following one by one

// s.start();
// s.stop();
// console.log(s.duration);

// s.start();
// s.stop();
// console.log(s.duration);

// s.reset();
// console.log(s.duration);
