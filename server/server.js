var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
// var services = require('./router/services.js');
// app.use('/services', services);//服务


app.set('jsonp callback name', 'JSON_CALLBACK');
app.listen(6789);
console.log("开启服务器");