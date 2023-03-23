import Router from 'express'; //основной роутер нашего приложения
const router = new Router(); //создали обьект роутера

import brandController from '../controllers/brandController.js';

router.post('/', brandController.create)
router.get('/', brandController.getAll)

export default router;
