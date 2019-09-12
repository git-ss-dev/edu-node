var express = require('express');
var fs = require('fs')
var app = express();
var port = process.env.port || 6500;
app.get('/', function(req,res){
    res.send('yes thi is express')
});

app.get('/movies', function(req,res){
    fs.readFile('movies.json', function(err,data){
        if(err) throw err;
        res.send(JSON.parse(data))
    })
    
});

app.listen(port,function(err){
    if(err) throw err;
    console.log('server is working fine on port' +port)
})