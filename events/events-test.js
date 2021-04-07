// const EventEmitter = require('events');
const EventEmitter = require('./events');
const util = require('util');

function Girl() {}

util.inherits(Girl, EventEmitter);

const cry = () => {
  console.log('哭');
};

let girl = new Girl();
girl.on('女生失恋', cry);
girl.on('女生失恋', () => {
  console.log('吃');
});

const fn = () => {
  console.log('逛街');
};
girl.once('女生失恋', fn);

setTimeout(() => {
  girl.off('女生失恋', fn);
  girl.emit('女生失恋');
  girl.off('女生失恋', cry);
  girl.emit('女生失恋');
});
