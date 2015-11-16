/**
 * Created by samuelmoss on 11/16/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var pg = require('pg');
var conString = 'postgres://localhost:5432/week_6_problems';


app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/address_call',function(req,res) {
    var results = [];

    pg.connect(conString, function (err, client, done) {
        var query = client.query('SELECT users.name, addresses.* FROM users JOIN addresses ON users.id=addresses.user_id WHERE users.name = ($1)', [req.query.person]
        );
        query.on('row', function (row) {
            results.push(row);
        });

        query.on('end', function () {
            client.end();
            return res.json(results);
        });
        if (err) {
            return console.log('We have an issue here: ', err)
        }
    });
});

app.get('/*', function(req,res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname,"./public/",file));
});

app.listen(app.get('port'), function(){
   console.log("London calling on port: ", app.get("port"));
});