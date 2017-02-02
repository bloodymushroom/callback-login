import express from 'express';
import path  from 'path';

var app = express();


app.get('/', function(req, res) {

})

app.listen(3000, function() {
  console.log('listening on 3000')
})