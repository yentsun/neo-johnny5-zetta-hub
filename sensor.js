var Device = require('zetta').Device;
var util = require('util');


var sensor = module.exports = function() {
    Device.call(this);
};
util.inherits(sensor, Device);

sensor.prototype.init = function(config) {

    config
    .type('sound_sensor')
    .name('soundSensor');
};
