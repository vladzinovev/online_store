//основной роутер нашего приложения
import Router from 'express';
//создали обьект роутера
const router = new Router();

router.post('/')
router.get('/')
router.get('/:id') //получить по id

export default router;
