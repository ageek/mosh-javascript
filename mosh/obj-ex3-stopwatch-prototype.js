function StopWatch() {
  this.running = false;
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;

  Object.defineProperty(this, "duration", {
    get: () => (running ? (new Date() - startTime) / 1000 : duration),
    // return current duration if running
  });
}

// move to Prototype, all private members now must be made public (using this) to be used by
// Prototype methods
StopWatch.prototype.start = function () {
  if (running) throw Error("StopWatch is already running");
  running = true;
  startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!running) throw Error("StopWatch is not running");
  running = false;
  endTime = new Date();
  duration += (endTime - startTime) / 1000;
};

StopWatch.prototype.reset = function () {
  running = false;
  duration = 0;
  startTime = null;
  endTime = null;
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
