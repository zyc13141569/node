/**
 * Created by MH on 2015-09-13.
 */
module.exports = {
    dbconn: function ()
    {
        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'db'
        });
        return connection;
    }
};