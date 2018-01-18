module.exports = function(server) {
    var sensor = server.where({type: 'sound_sensor'});
    var tv = server.where({type: 'tv'});
    server.observe([sensor, tv], function(sensor, tv){
        sensor.streams.intensity.on('data', function(m) {
            if(m.data < 0.5) {
                if (tv.available('turn-on')) {
                    tv.call('turn-on');
                }
                if (tv.available('turn-off')) {
                    tv.call('turn-off');
                }
            }
        });
    });
};
