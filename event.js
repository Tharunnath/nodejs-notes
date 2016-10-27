var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on("play",function(){
	console.log("playing");

})

emitter.emit("play");