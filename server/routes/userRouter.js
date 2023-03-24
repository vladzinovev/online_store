const Router = require('express') //основной роутер нашего приложения
const router = new Router() //создали обьект роутера
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration) //регистарция
router.post('/login', userController.login) //ввод логина
router.get('/auth', authMiddleware, userController.check) //проверяем зарегестрирован или нет

module.exports = router
