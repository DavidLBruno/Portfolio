"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('brand', {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
    });
};
