const mysql = require('mysql');
const { promisify } = require('util')
const pool = mysql.createPool({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
})
pool.getConnection((err, connection) => {
    if (err) {
        console.log(err)
    }
    if (connection) connection.release();
    console.log('Base de datos conectada')
    return
})
promisify(pool.query)
module.exports = pool