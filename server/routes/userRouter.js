//основной роутер нашего приложения
import Router from 'express';
//создали обьект роутера
const router = new Router();

import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';


router.post('/registration', userController.registration) //регистарция
router.post('/login', userController.login) //ввод логина
router.get('/auth', authMiddleware, userController.check) //проверяем зарегестрирован или нет


export default router;
