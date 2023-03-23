import express from 'express';
import dotenv from 'dotenv'; //для импорта env файла
//require('dotenv') тоже самое что и сверху импорт
dotenv.config();

import sequelize from "./db.js"; //const sequelize=require('./db.js');

//настроим cors чтобы могли отправлять запросы с браузера
import cors from 'cors';

import models from './models/models.js'
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js'


const port = process.env.PORT || 5000;

const app = express(); //создали express приложение

app.use(cors()); //чтобы работать с json форматом
app.use(express.json());
app.use('/api', router);
app.use(errorHandler); // Обработка ошибок, самый последний идет Middleware

//пример работы кода
/* app.get('/',(req,res)=>{
    res.status(200).json({message:'WORKING!!!'})
})  */

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
