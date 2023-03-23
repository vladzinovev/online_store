import sequelize from '../db.js';
import {DataTypes} from 'sequelize';

//модель пользователя
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

//модель корзины для пользователя
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//модель девайса в корзине
const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//модель девайса (товара)
const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

//модель (тип устройства)
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

//модель (бренд устройства)
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

//модель рейтинга устройства
const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

//модель индивидульной информации для каждого устройства (оперативная память или оборотов в минуту)
const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

//связующая таблица для типа и бренда
const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


//описываем как модели связаны друг с другом

User.hasOne(Basket) //1 к 1
Basket.belongsTo(User) //корзина принадлежит пользователю

User.hasMany(Rating) //1 ко многим
Rating.belongsTo(User) //рейтинг принадлежит пользователю

Basket.hasMany(BasketDevice) //1 ко многим
BasketDevice.belongsTo(Basket) //девайс хранится в корзине

Type.hasMany(Device) //1 ко многим
Device.belongsTo(Type) //у девайса один тип

Brand.hasMany(Device) //1 ко многим
Device.belongsTo(Brand) //у девайса один бренд

Device.hasMany(Rating) //1 ко многим
Rating.belongsTo(Device) //рейтинг принадлежит дивайсу

Device.hasMany(BasketDevice) //1 ко многим
BasketDevice.belongsTo(Device) //девайс в корзине принадлежит дивайсу

Device.hasMany(DeviceInfo, {as: 'info'}); //1 ко многим
DeviceInfo.belongsTo(Device) //уникальность характеристики девайса принадлежит девайсу

Type.belongsToMany(Brand, {through: TypeBrand }) //тип принадлежит бренду
Brand.belongsToMany(Type, {through: TypeBrand }) //бренду принадлежит типу


export default {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    DeviceInfo,
    TypeBrand
}





