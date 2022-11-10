"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        status: 200,
        err: false,
        msg: 'Get Users',
        data: []
    });
};
exports.getUsers = getUsers;
