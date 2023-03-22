import express from 'express';

//для импорта env файла
import dotenv from 'dotenv';
//require('dotenv') тоже самое что и сверху импорт
dotenv.config();

import sequelize from "./db.js";
//const sequelize=require('./db.js');


const port = process.env.PORT || 5000;

//создали express приложение
const app = express();


//вызываем функцию для подключения к БД
const start = async () => {
    try {
      //с помощью нее устанавливается подключение к БД
      await sequelize.authenticate();
      //сверяет состояние БД со схемой данных
      await sequelize.sync();
  
      //запускаем веб сервер на порте 4444
      app.listen(port, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log(`Server OK ${process.env.port}`);
      });
  
    } catch (e) {
      console.log(e);
    }
  };
  start();
