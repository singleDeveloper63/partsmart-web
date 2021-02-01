import { createAsyncThunk , createAction } from '@reduxjs/toolkit';
import api from '../../api/category';
import prodAPI from '../../api/products';


const UIActions = {
    getBrands : createAsyncThunk('categories/getBrands' , async () => {
        const result = await api.getBrands();
        return result.data;
    }),
    getSlides : createAsyncThunk('categories/getSlides' , async () => {
        const res = await api.getSlider();
        return res.data;
    }),
    getCarModels : createAsyncThunk('categories/getCars' , async (id) => {
        const res = await api.getCars(id);
        return res.data;
    }),
    getCategoris : createAsyncThunk('categories/getCategories', async () => {
        const res = await api.getCategories();
        return res.data;
    }),
    setBrandCars : createAction("setBrandCars"),
    getProducts : createAsyncThunk("categories/getProducts" , async () => {
        const res = await prodAPI.getProductsForUI();
        return res.data.data;
    }),
    setActiveProduct : createAsyncThunk("categories/setActiveProduct" , async (id) =>{
        const res = await prodAPI.getProductById(id);
        return res.data;
    }),
    setActiveToDefault : createAction("setActiveToDefault")
}

export default UIActions;