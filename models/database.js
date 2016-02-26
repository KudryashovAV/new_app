var pg = require('pg');
var conString = "pg://akd:123@localhost:5432/new_app_database";

pg.connect(conString, function(err, client, done) { // connect to postgres db
    if (err)
        console.log('Error while connecting: ' + err);
    client.query('CREATE DATABASE ' + dbName, function(err) { // create user's db
        if (err)
            console.log('ignoring the error'); // ignore if the db is there
        client.end(); // close the connection
    });
});


var client = new pg.Client(conString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
