import {DataTypes} from 'sequelize';
import { sequelize } from '../database/connection.js';

export const Author = sequelize.define('authors',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    nombre:{
        type: DataTypes.STRING
    },
    edad:{
        type:DataTypes.INTEGER
    }

});