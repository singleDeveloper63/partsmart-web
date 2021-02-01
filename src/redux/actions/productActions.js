import { createAction , createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/products';
import { createFilterFromObject } from '../../utils/common';

const productActions = {
    setFilter : createAsyncThunk("products/setNewFilter" , async (data) => {
        return data;
    }),
    resetFilter : createAction("products/resetFilter"),
    getProductsWithFilter : createAsyncThunk("products/getProductsWithFilter" , async (a,{getState}) => {
        const state = getState();
        const filters = createFilterFromObject(state.main.filters);
        const res = await api.getProductsByFilter(filters);
        return res.data.data;
    })
}

export default productActions;