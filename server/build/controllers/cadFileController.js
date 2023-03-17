"use strict";
exports.__esModule = true;
exports.getCadFiles = void 0;
var db_1 = require("../db/db");
var getCadFiles = function (req, res) {
    var id = req.params.id;
    try {
        //make db call here
        db_1.pool.connect(function (err) {
            if (err)
                throw err;
            db_1.pool.query("\n        SELECT cf2.* FROM\n        web_hw.cad_files cf2\n        JOIN\n        (SELECT cf.* FROM web_hw.customer_parts cp\n                LEFT JOIN web_hw.cad_files cf ON cp.CAD_file_ID = cf.ID\n                WHERE cp.customer_ID\n                IN (\n                  SELECT ID FROM web_hw.customer WHERE web_hw.customer.ID=?\n                )\n        ) AS selected\n        ON cf2.parent_CAD_ID = selected.ID\n        UNION\n        (SELECT cf.* FROM web_hw.customer_parts cp\n                LEFT JOIN web_hw.cad_files cf ON cp.CAD_file_ID = cf.ID\n                WHERE cp.customer_ID\n                IN (\n                  SELECT ID FROM web_hw.customer WHERE web_hw.customer.ID=?\n                )\n        )\n        ", [id, id], function (err, result) {
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
exports.getCadFiles = getCadFiles;
