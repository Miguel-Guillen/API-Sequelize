"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const login = (req, res) => {
    console.log(req.body);
    res.json({
        status: 200,
        err: false,
        msg: 'Login successfully',
        body: []
    });
};
exports.login = login;
const register = (req, res) => {
    console.log(req.body);
    res.json({
        status: 200,
        err: false,
        msg: 'Register user successfully',
        body: req.body
    });
};
exports.register = register;
