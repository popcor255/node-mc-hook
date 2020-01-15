var express = require('express'),
  bodyParser = require('body-parser'),
  shell = require('shelljs'),
  app = express(),
  port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/restart/mc', (req, res) => {
    shell.exec('./path_to_your_file')
    return res.send(JSON.stringify({ result: "success" }));
});

app.use('/', express.static('public'))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);