const {Type} = require('../models/models')

class TypeController {
    //создание типа
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    //получение всех типов
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()
