const EventEmitter = require('events');
const util = require('util');

function Girl() {}

util.inherits(Girl, EventEmitter);

let girl = new Girl();
girl.on('女生失恋', ()=>{
  console.log('哭');
})
girl.on('女生失恋', () => {
  console.log('吃');
})
setTimeout(() => {
  girl.emit('女生失恋')
})