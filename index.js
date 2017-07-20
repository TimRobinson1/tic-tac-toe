const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.engine('.html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('testfile.html')
})

http.listen(port, function() {
  console.log('Tic... Tac... Toe!')
})
