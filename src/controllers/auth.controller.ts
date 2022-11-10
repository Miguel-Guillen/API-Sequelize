import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        status: 200,
        err: false,
        msg: 'Login successfully',
        body: []
    })
}

export const register = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        status: 200,
        err: false,
        msg: 'Register user successfully',
        body: req.body
    })
}