const Router = require('express') //основной роутер нашего приложения
const router = new Router() //создали обьект роутера
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router
