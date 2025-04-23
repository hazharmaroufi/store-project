import axios from "axios";

const api = axios.create({baseURL : "https://fakestoreapi.com"})
// برای اینکه بتونیم تمیز تر به ای پی ای دسترسی داشته باشیم

api.interceptors.response.use(
    (response) => response.data   
, error => Promise.reject(error))

//  در بالا برای اطلاعاتی که دریافت میکنیم فقط اینترسپتر نوشتیم که در مسیر دریافت ای پی ای قرار میگیره
//  و باعث میشه از ریسپانس فقط بخش دیتا رو برای ما دریافت کنه

export default api;