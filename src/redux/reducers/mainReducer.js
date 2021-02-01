import { createReducer } from '@reduxjs/toolkit';
import { ProductActions } from '../actions';
const initial = {
    filters : {
        brand : "",
        device_type : "",
        car_model : "",
        year : ""
    },
    products : {
        pending : true,
        failed : false,
        list : []
    }
}

const mainReducer = createReducer(initial , builder => {
    builder
        .addCase(ProductActions.setFilter.fulfilled  , (state,action) => {
            const name = Object.keys(action.payload)[0];
            state.filters[name] = action.payload[name];
        })
        .addCase(ProductActions.resetFilter.type , (state) => {
            return {...state , filters  : {brand : "" , device_type : "" ,car_model : "" ,year : "" }}
        })
        .addCase(ProductActions.getProductsWithFilter.pending , (state) => {
            return {...state , products : {...state.products , pending : true }}
        })
        .addCase(ProductActions.getProductsWithFilter.fulfilled , (state,action) => {
            return {...state , products : { pending : false , failed : false , list : action.payload }}
        })
})

export default mainReducer;