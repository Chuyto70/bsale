const express = require('express');
const app = express();
require('./db')
    //Settings
app.set('port', process.env.PORT || 3000)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', express.static(__dirname + '/public/views'))

app.use(express.json());;
app.use(express.urlencoded({ extended: false }))
    //Routes
app.use(require('./Routes/index'))
    //middleware



//Server Listenning
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})