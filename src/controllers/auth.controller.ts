import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    const { correo, pass } = req.body
    const user: any = await User.findOne({ where: { correo: correo, estado: 1 } });

    if(!user){
        return res.status(404).json({
            status: 404,
            err: true,
            msg: 'Error email or password incorrect',
            body: 0
        })
    }
    const password = await bycrypt.compare(pass, user.pass);
    if(!password){
        return res.status(404).json({
            status: 404,
            err: true,
            msg: 'Error email or password incorrect',
            body: 0
        })
    }

    const token = jwt.sign({
        email: correo,
        password: password
    }, process.env.SECRET_KEY || '@24e78b2d_MAGV#',
    {
        expiresIn: 600000
    });

    res.json({
        status: 200,
        err: false,
        msg: 'Login successfully',
        body: token
    })
}