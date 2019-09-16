var express = require('express');
var mongodb = require('mongodb').MongoClient;
var port = process.env.port || 7800
var app = express();
var url= "mongodb://localhost:27017";
app.get('/', function(req,res){
    mongodb.connect(url, function(err,db){
        if(err) throw err;
        var dbobject = db.db('shivam');
        dbobject.collection('ss').find({}).toArray(function(err,data){
            if(err) throw err;
            res.send(data) 
        })

    })
})
app.listen(port, function(err){
    if(err) throw err;
    else{
        console.log('server running on port'+port)
    }
})