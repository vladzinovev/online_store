import Sequelize from "sequelize"; //const Sequelize = require('sequelize');
import dotenv from 'dotenv'; //для импорта env файла
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, //Название БД
  process.env.DB_USER, //Пользователь
  process.env.DB_PASSWORD, //Пароль
  {
    dialect: "postgres", //Тип БД
    host: process.env.DB_HOST, //Хост
    port: process.env.DB_PORT, //Порт
  }
);
export default sequelize;
