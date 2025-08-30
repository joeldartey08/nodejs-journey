/**
 * Event module
 * two steps to handle an event one is register an event and another is emit or raise an event
 * the event module when required or imported unlike the other modules it returns an EventEmitter class.
 */
const event = require("events");
// const { EventEmitter } = require("events"); best and fastes way to require

const { EventEmitter } = event;
const eventEmitter = new EventEmitter() // instance of the class

// to register an event use the .on() method
eventEmitter.on("event-1", (obj)=>{
    console.log("hello");
    console.log(obj)
})

//to emit or raise an event
eventEmitter.emit("event-1",{msg: "hello",age: 21, name: "Dartey Joel"})

