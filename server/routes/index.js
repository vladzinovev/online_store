//основной роутер нашего приложения
import Router from 'express';
//создали обьект роутера
const router = new Router();

//импортируем все файлы с роутерами
import deviceRouter from'./deviceRouter';
import userRouter from'./userRouter';
import brandRouter from'./brandRouter';
import typeRouter from'./typeRouter';

//файл обьединяющий все роуты
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

export default router;
