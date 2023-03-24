const Router = require('express') //основной роутер нашего приложения
const router = new Router() //создали обьект роутера

//импортируем все файлы с роутерами
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

//файл обьединяющий все роуты
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
