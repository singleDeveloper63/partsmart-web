import axios from 'axios';

const URL = 'http://app.partsmart.uz/api/v1/auth/';

export const AuthAPI = {
    signUp : (data) => (axios.post(`${URL}user/create`,data)),
    signIn : (data) => (axios.post(`${URL}login`,data))
}