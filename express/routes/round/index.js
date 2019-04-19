const mongdb = require("mongodb");
const Mongo = require('Mongodb-curd');
let dbName = "local";
let stName = "week2";



module.exports = {
    find(req, res, next) {
        Mongo.find(dbName, stName, {}, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        })
    }
}