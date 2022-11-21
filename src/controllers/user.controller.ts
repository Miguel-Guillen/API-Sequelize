import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bycrypt from 'bcrypt';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll({ where: { estado: 1 } });
    if(!users){
        return res.json({
            status: 404,
            err: false,
            msg: 'Users not found',
            body: []
        })
    }
    
    try {
        res.json({
            status: 200,
            err: false,
            msg: 'Get Users',
            body: users
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        })
    }
}

export const searchUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    if(!id || id == undefined || id == null){
        return res.status(400).json({
            status: 400,
            msg: 'id not sent',
            err: true,
            body: 0
        })
    }

    const user = await User.findOne({ where: { id: id, estado: 1 } });

    try {
        if(!user){
            return res.status(404).json({
                status: 404,
                msg: 'Error user not found',
                err: true,
                body: 0
            })
        }
    
        res.json({
            status: 200,
            err: false,
            msg: 'User found',
            body: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        })
    }
}


export const newUser = async (req: Request, res: Response) => {
    const { 
        nombre,
        apellidos,
        correo,
        pass,
        curp,
        cedula,
        privilegios,
        estado
    } = req.body;
    const hassPass = await bycrypt.hash(pass, 10);
    
    const user = await User.findOne({ where: { nombre: nombre } });
    if(user){
        return res.status(400).json({
            status: 400,
            msg: 'Error, the user already registered',
            err: true,
            body: 0
        })
    }

    try {
        await User.create({
            nombre,
            apellidos,
            correo,
            pass: hassPass,
            curp,
            cedula,
            privilegios,
            estado
        })
    
        res.json({
            status: 200,
            err: false,
            msg: 'User ' + nombre + ' register successfully',
            body: 0
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'An error occurred while registering the user',
            err: true,
            body: error
        })
    }
    
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    if(!id || id == undefined || id == null){
        return res.status(400).json({
            status: 400,
            msg: "Id not sent",
            err: true,
            body: 0
        })
    }

    const user = await User.findOne({ where: { id: id, estado: 1 } })
    if(!user){
        return res.status(404).json({
            status: 404,
            msg: "User not found",
            err: true,
            body: 0
        })
    }

    const { 
        nombre,
        apellidos,
        correo,
        pass,
        curp,
        cedula,
        privilegios,
        estado
    } = req.body;
    const hassPass = await bycrypt.hash(pass, 10);

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
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: "An error ocurred while the user is updated",
            err: true,
            body: 0
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    if(!id || id == undefined || id == null){
        return res.status(400).json({
            status: 400,
            msg: "Id not sent",
            err: true,
            body: 0
        })
    }

    const user: any = await User.findOne({ where: { id: id } })
    if(!user){
        return res.status(404).json({
            status: 404,
            msg: "User not found",
            err: true,
            body: 0
        })
    }

    try {
        let estatus;
        if(user.estado == 0) estatus = 1;
        else if(user.estado == 1) estatus = 0;
        
        user.set({ estado: estatus });
        user.save();

        res.json({
            status: 200,
            err: false,
            msg: 'User delete successfully',
            body: 0
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: "An error ocurred while the user is deleted",
            err: true,
            body: 0
        })
    }
}