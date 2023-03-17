"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cadFileController_1 = require("../controllers/cadFileController");
var cadFileRouter = (0, express_1.Router)();
cadFileRouter.get('/:id', cadFileController_1.getCadFiles);
exports["default"] = cadFileRouter;
