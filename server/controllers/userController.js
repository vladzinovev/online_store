const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt'); //для того чтобы хэшировать пароли и не хранить в открытом виде
const jwt = require('jsonwebtoken'); //создание json tokena
const {User, Basket} = require('../models/models')

//создание jwt token
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    //регистрация
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        //существует ли пользователь с таким email
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5); //хэшируем пароль
        const user = await User.create({email, role, password: hashPassword}); //создаем
        const basket = await Basket.create({userId: user.id}); //создаем корзину
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    //логин
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        //пароль пользователя совпадает с БД
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    //проверка авторизации
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
