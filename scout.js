var Scout = require('zetta').Scout;
var util = require('util');
var five = require('johnny-five');
var EtherPortClient = require('etherport-client').EtherPortClient;
var sensor = require('./sensor');


SensorScout = module.exports = function () {
    Scout.call(this);
};

util.inherits(SensorScout, Scout);

SensorScout.prototype.init = function (next) {
    var self = this;
    console.log('waiting for NodeMCU');
    var board = new five.Board({
        port: new EtherPortClient({
            host: '192.168.0.107', // IP address of the NodeMCU
            port: 3030
        }),
        timeout: 1e5,
        repl: false
    });
    board.on('ready', function () {
        var device = self.discover(sensor);
        var RC004 = new five.Sensor({
            pin: "A0"
        });
        RC004.on("change", function () {
            var noise = this.scaleTo(0, 500);
            device._onData(noise);
        });
    });
    next();
};
