const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chuyto:daqa@cluster0.8mzas.mongodb.net/bsale', { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(db => {
        console.log('Conecatado a la base de datos')
    }).catch(err => console.log('Ha ocurrido un error', err))