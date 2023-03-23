//основной роутер нашего приложения
import Router from 'express';
//создали обьект роутера
const router = new Router();

router.post('/registration') //регистарция
router.post('/login') //ввод логина
router.get('/auth') //проверяем зарегестрирован или нет

export default router;
