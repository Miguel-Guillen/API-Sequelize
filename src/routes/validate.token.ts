import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { User } from '../models/user.model';

const validateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    // const { correo, pass } = req.body;

    // const user: any = await User.findOne({ where: { correo: correo } });
    if(headerToken != undefined && headerToken.startsWith('Bearer ') ){
        try {
            const token = headerToken.slice(7);
            jwt.verify(token, process.env.SECRET_KEY || '@24e78b2d_MAGV#');
            next();
        } catch (error) {
            return res.status(401).json({
                status: 401,
                err: true,
                msg: 'Invalid token',
                body: 0
            })
        }
        
    }else {
        return res.status(401).json({
            status: 401,
            err: true,
            msg: 'Access denied',
            body: 0
        })
    }
}

export default validateAdmin;