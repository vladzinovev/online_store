//выдаем ошибку если пользователь не указал id
class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    //создаем под ошибку 404
    static badRequest(message) {
        return new ApiError(404, message)
    }

     //создаем под ошибку 500
    static internal(message) {
        return new ApiError(500, message)
    }

     //создаем под ошибку 403
    static forbidden(message) {
        return new ApiError(403, message)
    }
}
export default ApiError;
