"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cadFileRouter_1 = __importDefault(require("./routers/cadFileRouter"));
var cors_1 = __importDefault(require("cors"));
var pathPlanningRouter_1 = __importDefault(require("./routers/pathPlanningRouter"));
var customerRouter_1 = __importDefault(require("./routers/customerRouter"));
var readFileRouter_1 = __importDefault(require("./routers/readFileRouter"));
var app = (0, express_1["default"])();
var PORT = 8080;
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use('/cadFiles', cadFileRouter_1["default"]);
app.use('/pathPlannings', pathPlanningRouter_1["default"]);
app.use('/customers', customerRouter_1["default"]);
app.use('/file', readFileRouter_1["default"]);
app.listen(PORT, function () {
    console.log("Connected to port: ".concat(PORT));
});
