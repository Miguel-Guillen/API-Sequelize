import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bycrypt from 'bcrypt';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();

    res.json({
        status: 200,
        err: false,
        msg: 'Get Users',
        body: users
    })
}

export const newUser = async (req: Request, res: Response) => {
    const { 
        nombre,
        apellidos,
        correo,
        pass,
        curp,
        cedula,
        estado
    } = req.body;
    
    const hassPass = await bycrypt.hash(pass, 10);
    await User.create({
        nombre,
        apellidos,
        correo,
        pass: hassPass,
        curp,
        cedula,
        estado
    })

    res.json({
        status: 200,
        err: false,
        msg: 'User' + nombre + 'register successfully',
        body: 0
    })
}