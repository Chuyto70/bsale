const express = require('express');
const app = express();
require('./db')
    //Settings
app.set('port', process.env.PORT || 3000)
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