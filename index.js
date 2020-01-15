var express = require('express'),
  bodyParser = require('body-parser');
  app = express(),
  port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/restart/mc', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

app.use('/', express.static('public'))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);