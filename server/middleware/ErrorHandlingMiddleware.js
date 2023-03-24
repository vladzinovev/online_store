const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    //если статус ошибки apierror
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    //другая ошибка
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}
