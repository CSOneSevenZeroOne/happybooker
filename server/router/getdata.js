var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnection.js")
router.post('/indexbanner', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from index_banner where type='${req.body.type}'`, function (results) {
        res.send(results);
    });
});
router.post('/indexblist', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from index_booklist where type='${req.body.type}'`, function (results) {
        res.send(results);
    });
});

router.post('/getbanner', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from autoplay where type='${req.body.type}'`, function (results) {
        res.send(results);
    });
});

router.post('/latelyupdate', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from index_lately_update`, function (results) {
        res.send(results);
    });
});

router.post('/indextop', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from index_top where type='${req.body.type}'`, function (results) {
        res.send(results);
    });
});
module.exports = router;