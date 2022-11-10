"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sito', 'root', '24e78b2d', {
    host: 'localhost',
    dialect: 'mysql',
    database: 'sito'
});
exports.default = sequelize;
