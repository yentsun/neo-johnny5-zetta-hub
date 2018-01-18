var zetta = require('zetta');
var scout = require('./scout');


zetta()
    .name('Neo Hub')
    // .link('http://198.162.0.108:1337/')
    .use(scout)
    .listen(1337, function () {
        console.log('Zetta is running at http://127.0.0.1:1337');
});
