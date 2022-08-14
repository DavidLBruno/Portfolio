"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const server = (0, express_1.default)();
//Middlewares
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use('/', controllers_1.default);
exports.default = server;
