import axios from 'axios';

const apiURL = 'http://app.partsmart.uz/api/v1/product';

const products = {
    getProductsForUI : () => (axios.get(`${apiURL}/list?limit=15`)),
    getProductById : id => (axios.get(`${apiURL}/get/${id}`)),
    getProductsByFilter : filter => (axios.get(`${apiURL}/list?${filter}`))
}

export default products;