const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/api/users'], { target: 'http://192.168.1.145:3001' }));
}