//Routas para la para a aplicacion
'use strict';

var path = require('path');
var config = require('./config/environment');
module.exports = function (app) {
    //Todas las rutas iran aqui
    app.use('/api/usuario', require('./api/usuario'));
    app.use('/api/cinema', require('./api/cinema'));
    //--------------------------------
    
    //Rutas indefinidas retornaran 404
    
    //--------------------------------
    
    //El resto redirigen al index.html
    app.route('/*').get(function (req,res) {
        //res.sendfile( '/home/ubuntu/workspace/cliente/index.html
        res.sendFile(path.join(config.root, '/cliente/index.html'));
        //res.sendfile(app.get('appPath') + '/index.html');
       // res.sendFile('/home/ubuntu/workspace/cliente/index.html');
         //res.sendFile('https://cinemaudea-cposada23.c9users.io/cliente/index.html');
    });
    
};