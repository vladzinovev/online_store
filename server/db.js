const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: "postgres", //Тип БД
        host: process.env.DB_HOST, //Хост
        port: process.env.DB_PORT, //Порт
    }
)
