"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.readPartialFile = void 0;
var fs_1 = __importDefault(require("fs"));
var readPartialFile = function (req, res) {
    var path = req.body.path;
    var customer = path.slice(1, 10);
    var fullPath = '';
    //Check customer since the file dir includes their name which is not in db
    if (customer === 'CustomerA') {
        fullPath = "../web_hw_files".concat(path.slice(0, 10), "/Flange").concat(path.slice(10));
    }
    else {
        fullPath = "../web_hw_files".concat(path.slice(0, 10), "/Stiffener").concat(path.slice(10));
    }
    try {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        //Read partial file only
        fs_1["default"].createReadStream(fullPath, { start: 0, end: 5000 }).pipe(res);
    }
    catch (e) {
        res.send('Error' + e);
    }
};
exports.readPartialFile = readPartialFile;
