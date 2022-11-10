import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sito', 'root', '24e78b2d', {
    host: 'localhost',
    dialect: 'mysql',
    database: 'sito'
})

export default sequelize;