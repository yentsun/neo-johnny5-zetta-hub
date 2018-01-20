var Device = require('zetta').Device;
var util = require('util');


var SnapDriver = module.exports = function () {
    Device.call(this);
    this.snapped = 0;
};
util.inherits(SnapDriver, Device);

SnapDriver.prototype.init = function (config) {
    config
    .type('sound_sensor')
    .monitor('snapped');
};

SnapDriver.prototype._onData = function (noise) {
    if (noise < 424) {
        this.snapped++;
        console.log('SNAP!!!');
    }

};
