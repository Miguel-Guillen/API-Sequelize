import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user.route';
import routesAuth from '../routes/login.router'
import { User } from './user.model';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port, () => console.log("servidor en el puerto: " + this.port));
    }

    routes(){
        this.app.use('/api/users', routesUser);
        this.app.use('/api/login', routesAuth);
    }

    midlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnection(){
        try {
            await User.sync()
            console.log("connection has been done successfully");
        }catch(error) {
            console.log("error, the connection has failed", error);
        }
    }
}

export default Server