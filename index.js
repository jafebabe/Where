var express = require('express');
var app = express();

var router = express.Router();
router.get('/', function(req, res, next) {
  app.set('topic', 'multiple routers');
  next();
});

app.use(router);

app.use(express.static(__dirname + '/resources'));
app.use(express.static(__dirname + '/plugins'));
app.set('views',[ __dirname + '/resources', __dirname + '/views']);
app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/login', function(req, res) {
  res.render('login_map.html');
});

app.get('/header', function(req, res) {
  res.render('header.html');
});

app.get('/footer', function(req, res) {
  res.render('footer.html');
});

router.get(['/user/*'], function(req, res){
  res.send('username: ' + req.params[0] + ', password:' + req.params[1] + '!');
});

app.engine('html', require('ejs').renderFile);

app.listen(3000);