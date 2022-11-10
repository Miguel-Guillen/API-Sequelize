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
exports.newUser = exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.findAll();
    res.json({
        status: 200,
        err: false,
        msg: 'Get Users',
        body: users
    });
});
exports.getUsers = getUsers;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellidos, correo, pass, curp, cedula, estado } = req.body;
    const hassPass = yield bcrypt_1.default.hash(pass, 10);
    yield user_model_1.User.create({
        nombre,
        apellidos,
        correo,
        pass: hassPass,
        curp,
        cedula,
        estado
    });
    res.json({
        status: 200,
        err: false,
        msg: 'User' + nombre + 'register successfully',
        body: 0
    });
});
exports.newUser = newUser;
