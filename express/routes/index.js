var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");
const Mongo = require('Mongodb-curd');
const { find } = require("./round")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get("/cender", find)
module.exports = router;