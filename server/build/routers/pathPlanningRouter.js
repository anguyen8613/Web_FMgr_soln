"use strict";
exports.__esModule = true;
var pathPlanningController_1 = require("./../controllers/pathPlanningController");
var express_1 = require("express");
var pathPlanningRouter = (0, express_1.Router)();
pathPlanningRouter.get('/:ids', pathPlanningController_1.getPathPlanningFiles);
exports["default"] = pathPlanningRouter;
