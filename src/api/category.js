import axios from 'axios';

const apiURL = 'http://app.partsmart.uz/api/v1/';

const category = {
    getBrands : () => (axios.get(`${apiURL}menu/brand/list`)),
    getCategories : () => (axios.get(`${apiURL}menu/device-type/list`)),
    getCars : (id) => (axios.get(`${apiURL}menu/car-model/list/${id}`)),
    getSlider : () => axios.get(`${apiURL}slider/list`)
}

export default category;