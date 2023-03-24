require('dotenv').config(); //для импорта env файла
const express = require('express')
const sequelize = require('./db') //const sequelize=require('./db.js');
const models = require('./models/models')
//настроим cors чтобы могли отправлять запросы с браузера
const cors = require('cors')
const fileUpload = require('express-fileupload'); //для загрузки картинок
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express(); //создали express приложение
app.use(cors()); //чтобы работать с json форматом
app.use(express.json());//перевод в json формат
app.use(express.static(path.resolve(__dirname, 'static')));//чтобы получать фотку по запросу
app.use(fileUpload({}));//загрузка кртинок
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

//вызываем функцию для подключения к БД
const start = async () => {
    try {
        //с помощью нее устанавливается подключение к БД
        await sequelize.authenticate()
        //сверяет состояние БД со схемой данных
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
