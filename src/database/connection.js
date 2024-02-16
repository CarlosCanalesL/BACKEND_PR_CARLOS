import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Sequelize utilizando las variables de entorno
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});
