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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import { User } from '../models/user.model';
const validateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const headerToken = req.headers['authorization'];
    // const { correo, pass } = req.body;
    // const user: any = await User.findOne({ where: { correo: correo } });
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const token = headerToken.slice(7);
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '@24e78b2d_MAGV#');
            next();
        }
        catch (error) {
            return res.status(401).json({
                status: 401,
                err: true,
                msg: 'Invalid token',
                body: 0
            });
        }
    }
    else {
        return res.status(401).json({
            status: 401,
            err: true,
            msg: 'Access denied',
            body: 0
        });
    }
});
exports.default = validateAdmin;
