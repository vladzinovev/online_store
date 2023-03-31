import axios from "axios";

//для обычных запросов, без авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//для запросов, с авторизацией (где подставляется токен к каждому запросу)
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
//подсталяем интерсепторс для запроса
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
