"use strict";
exports.__esModule = true;
exports.getCustomer = void 0;
var db_1 = require("../db/db");
var getCustomer = function (req, res) {
    var id = req.params.id;
    try {
        //make db call here
        db_1.pool.connect(function (err) {
            if (err)
                throw err;
            db_1.pool.query("\n        SELECT * FROM web_hw.customer where ID=?\n        ", [id], function (err, result) {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
    catch (e) {
        res.send('Error' + e);
    }
};
exports.getCustomer = getCustomer;
