import {Type} from '../models/models.js'

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

const typeController = new TypeController();
export default typeController;
