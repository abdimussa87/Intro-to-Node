// var events = require('events');
// var eventEmitter = events.EventEmitter();

// eventEmitter.on('newEvent',(message)=>{console.log(message);});

// eventEmitter.emit('newEvent', 'Hello there');

// const events = require('events');

// let emitter = events.EventEmitter();

// emitter.on('newEvent',(message)=>{
//     console.log(message);
// });

// emitter.emit('newEvent','Hello there');

var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler =  function(){
    console.log('Screaming is heard');
}

eventEmitter.on('scream',myEventHandler);
eventEmitter.emit('scream');