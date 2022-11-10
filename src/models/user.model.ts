import { DataTypes } from "sequelize";
import sequelize from "../db/connection"

export const User = sequelize.define('user', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curp: {
        type: DataTypes.STRING,
        unique: true
    },
    cedula: { 
        type: DataTypes.STRING,
        unique: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})