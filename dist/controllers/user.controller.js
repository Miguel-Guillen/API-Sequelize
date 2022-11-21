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
exports.deleteUser = exports.updateUser = exports.newUser = exports.searchUser = exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.findAll({ where: { estado: 1 } });
    if (!users) {
        return res.json({
            status: 404,
            err: false,
            msg: 'Users not found',
            body: []
        });
    }
    try {
        res.json({
            status: 200,
            err: false,
            msg: 'Get Users',
            body: users
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        });
    }
});
exports.getUsers = getUsers;
const searchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id || id == undefined || id == null) {
        return res.status(400).json({
            status: 400,
            msg: 'id not sent',
            err: true,
            body: 0
        });
    }
    const user = yield user_model_1.User.findOne({ where: { id: id, estado: 1 } });
    try {
        if (!user) {
            return res.status(404).json({
                status: 404,
                msg: 'Error user not found',
                err: true,
                body: 0
            });
        }
        res.json({
            status: 200,
            err: false,
            msg: 'User found',
            body: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        });
    }
});
exports.searchUser = searchUser;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellidos, correo, pass, curp, cedula, privilegios, estado } = req.body;
    const hassPass = yield bcrypt_1.default.hash(pass, 10);
    const user = yield user_model_1.User.findOne({ where: { nombre: nombre } });
    if (user) {
        return res.status(400).json({
            status: 400,
            msg: 'Error, the user already registered',
            err: true,
            body: 0
        });
    }
    try {
        yield user_model_1.User.create({
            nombre,
            apellidos,
            correo,
            pass: hassPass,
            curp,
            cedula,
            privilegios,
            estado
        });
        res.json({
            status: 200,
            err: false,
            msg: 'User ' + nombre + ' register successfully',
            body: 0
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        });
    }
});
exports.newUser = newUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id || id == undefined || id == null) {
        return res.status(400).json({
            status: 400,
            msg: "Id not sent",
            err: true,
            body: 0
        });
    }
    const user = yield user_model_1.User.findOne({ where: { id: id, estado: 1 } });
    if (!user) {
        return res.status(404).json({
            status: 404,
            msg: "User not found",
            err: true,
            body: 0
        });
    }
    const { nombre, apellidos, correo, pass, curp, cedula, privilegios, estado } = req.body;
    const hassPass = yield bcrypt_1.default.hash(pass, 10);
    try {
        user.set({
            nombre,
            apellidos,
            correo,
            pass: hassPass,
            curp,
            cedula,
            privilegios,
            estado
        });
        user.save();
        res.json({
            status: 200,
            err: false,
            msg: 'User updated successfully',
            body: 0
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            msg: "An error ocurred while the user is updated",
            err: true,
            body: 0
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id || id == undefined || id == null) {
        return res.status(400).json({
            status: 400,
            msg: "Id not sent",
            err: true,
            body: 0
        });
    }
    const user = yield user_model_1.User.findOne({ where: { id: id } });
    if (!user) {
        return res.status(404).json({
            status: 404,
            msg: "User not found",
            err: true,
            body: 0
        });
    }
    try {
        let estatus;
        if (user.estado == 0)
            estatus = 1;
        else if (user.estado == 1)
            estatus = 0;
        user.set({ estado: estatus });
        user.save();
        res.json({
            status: 200,
            err: false,
            msg: 'User delete successfully',
            body: 0
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            msg: "An error ocurred while the user is deleted",
            err: true,
            body: 0
        });
    }
});
exports.deleteUser = deleteUser;
