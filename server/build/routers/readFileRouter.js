"use strict";
exports.__esModule = true;
var readFileController_1 = require("./../controllers/readFileController");
var express_1 = require("express");
var readFileRouter = (0, express_1.Router)();
readFileRouter.post('/', readFileController_1.readPartialFile);
exports["default"] = readFileRouter;
