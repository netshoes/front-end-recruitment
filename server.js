'use strict'

var express = require('express'),
    app = express(),
    token = '7b0f2559-6ae4-4093-82ba-76a1748dd78a',
    dbName = 'netshoes',
    db = require('orchestrate')(token);

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen('3000',function(){
    console.log('Server running at http://localhost:3000 !!')
})

app.get('/',function(req,res){
    res.sendFile('main.html',{'root':__dirname + '/public'});
})

app.get('/list', function (request, response) {
  db.get(dbName, "products").then(function (res) {
    response.json(res.body);
  }).fail(function (err) {
    response.json(err);
  });
});