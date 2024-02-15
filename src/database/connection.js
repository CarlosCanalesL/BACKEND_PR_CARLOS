import Sequelize from "sequelize";

export const sequelize = new Sequelize('back_base', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});