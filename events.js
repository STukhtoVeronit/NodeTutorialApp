//Eventemitter

const EventEmitter = require ('events');

class Timer extends EventEmitter {
  constructor(total){
    super();
    this.total = total;
    this.ticks = 0;
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.emit('start');
  }

  tick() {
    this.ticks += 1;

    if (this.ticks <= this.total){
      this.emit('tick', this.ticks);
    } else
      this.end();
  }

  end(){
    clearInterval(this.interval);
    this.emit('end');
  }
}

const timer = new Timer(12);

timer.once('start', () => console.log('Start'));
timer.on('tick', tick => console.log(tick));
timer.once('end', () => console.log('End'));

timer.start();

// const emitter = new EventEmitter();
//
// emitter.on('start', (message) => console.log(message));
// emitter.once('started', (message) => console.log(message));
//
// emitter.emit('start', 'fuck');
// emitter.emit('started', 'fuckeee');
// emitter.emit('started', 'fuckeee 2');