import Router from 'express'; //основной роутер нашего приложения
const router = new Router(); //создали обьект роутера

import typeController from '../controllers/typeController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

export default router;
