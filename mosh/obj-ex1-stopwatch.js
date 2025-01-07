function StopWatch() {
  let running = false;
  let duration = 0;
  let startTime;
  let endTime;

  Object.defineProperty(this, "duration", {
    get: () => (running ? (new Date() - startTime) / 1000 : duration),
    // return current duration if running
  });

  this.start = function () {
    if (running) throw Error("StopWatch is already running");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw Error("StopWatch is not running");
    running = false;
    endTime = new Date();
    duration += (endTime - startTime) / 1000;
  };

  this.reset = function () {
    running = false;
    duration = 0;
    startTime = null;
    endTime = null;
  };
}

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
