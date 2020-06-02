const args = process.argv.slice(2);

let timers = [];

const createTimers = function() {
  for (let arg of args) {
    if (arg >= 0 && arg !== NaN) {
      timers.push(Number(arg))
    }
  }
  timers.sort((a, b) => a - b);
  return timers;
}

const alarm = function() {
  if (args.length > 0) {
    createTimers();
    for (let timer of timers) {
      setTimeout(() => process.stdout.write("."), timer * 1000);
    }
  }
}

alarm();