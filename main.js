var zetta = require('zetta');
var scout = require('./scout');


zetta()
    .name('Neo Hub')
    .use(scout)
    .link('http://192.168.0.108:1337/')
    .listen(1337, function () {
        console.log('Zetta is running at http://127.0.0.1:1337');
});
