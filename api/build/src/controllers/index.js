"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_1 = require("../services/mail");
const router = (0, express_1.Router)();
router.post('/', mail_1.recibirMail);
exports.default = router;
