import Router from 'express'; //основной роутер нашего приложения
const router = new Router(); //создали обьект роутера

import deviceController from '../controllers/deviceController.js';

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne) //получить по id

export default router;
