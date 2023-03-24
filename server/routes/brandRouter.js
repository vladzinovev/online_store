const Router = require('express') //основной роутер нашего приложения
const router = new Router() //создали обьект роутера
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)

module.exports = router
