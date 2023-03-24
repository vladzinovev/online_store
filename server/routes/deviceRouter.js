const Router = require('express') //основной роутер нашего приложения
const router = new Router() //создали обьект роутера
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne) //получить по id

module.exports = router
