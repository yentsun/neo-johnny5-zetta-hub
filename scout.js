var Scout = require('zetta').Scout;
var util = require('util');
const five = require('johnny-five');
const EtherPortClient = require('etherport-client').EtherPortClient;
var sensor = require('./sensor');

// constructor
SensorScout = module.exports = function() {
    Scout.call(this);
    this.board = new five.Board({
        port: new EtherPortClient({
            host: '192.168.0.107', // IP address of the ESP
            port: 3030
        }),
        timeout: 1e5,
        repl: false
    });
};

util.inherits(SensorScout, Scout);

SensorScout.prototype.init = function(next) {
    var self = this;
    self.board.on('ready', function () {
        self.discover(sensor);
        var RC004 = new five.Sensor({
            pin: "A0"
        });
        RC004.on("change", function() {
            var noise = this.scaleTo(0, 500);
            if (noise < 424) console.log('SNAP!!!');
        });
    });

    next();
};