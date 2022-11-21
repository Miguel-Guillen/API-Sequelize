"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, pass } = req.body;
    const user = yield user_model_1.User.findOne({ where: { correo: correo, estado: 1 } });
    if (!user) {
        return res.status(404).json({
            status: 404,
            err: true,
            msg: 'Error email or password incorrect',
            body: 0
        });
    }
    const password = yield bcrypt_1.default.compare(pass, user.pass);
    if (!password) {
        return res.status(404).json({
            status: 404,
            err: true,
            msg: 'Error email or password incorrect',
            body: 0
        });
    }
    const token = jsonwebtoken_1.default.sign({
        email: correo,
        password: password
    }, process.env.SECRET_KEY || '@24e78b2d_MAGV#', {
        expiresIn: 600000
    });
    res.json({
        status: 200,
        err: false,
        msg: 'Login successfully',
        body: token
    });
});
exports.login = login;
