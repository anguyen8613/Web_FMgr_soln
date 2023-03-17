"use strict";
exports.__esModule = true;
var express_1 = require("express");
var customerController_1 = require("./../controllers/customerController");
var customerRouter = (0, express_1.Router)();
customerRouter.get('/:id', customerController_1.getCustomer);
exports["default"] = customerRouter;
