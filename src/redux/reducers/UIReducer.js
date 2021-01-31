import { createReducer } from '@reduxjs/toolkit';
import { UIActions } from '../actions';

const initial = {
    brands : {
        pending : true,
        failed : false,
        list : []
    },
    categories : {
        pending : true,
        failed : false,
        list : []
    },
    cars : {
        pending : true,
        failed : false,
        list : []
    },
    sliders : {
        pending : true,
        failed : false,
        list : []
    },
    products : {
        pending : true,
        failed : false,
        list : []
    },
    currentProd : {
        pending : true,
        failed : false,
        data : {}
    }
}

const UIReducer = createReducer(initial , builder => {
    builder
        .addCase(UIActions.getBrands.fulfilled , (state,action) =>{
            const ll = [];
            action.payload.forEach((brand) =>{
                ll.push({ brand : brand , cars : [] });
            })
            return {...state ,
                        brands : { pending : false , failed : false , list : action.payload },
                        cars : { ...state.cars , list : ll }}
        })
        .addCase(UIActions.getSlides.fulfilled , (state,action) => {
            return {...state , sliders : { pending: false,  failed : false , list : action.payload }}
        })
        .addCase(UIActions.setBrandCars.type , (state,action) =>{
            const { id , cars } = action.payload;
            return {
                ...state ,
                cars : {
                    ...state.cars,
                    list : state.cars.list.map((car) => (car.brand.id === id ? {...car , cars : cars } : car))
                }
            }
        })
        .addCase(UIActions.getProducts.fulfilled , (state,action) => {
            return {...state , products : { pending : false , failed : false , list : action.payload }}
        })
        .addCase(UIActions.setActiveProduct.pending , (state,action) => {
            return {...state , currentProd : { pending : true , failed : false , data : {} }};
        })
        .addCase(UIActions.setActiveProduct.fulfilled , (state, action) => {
            return {...state , currentProd : { pending : false , failed : false , data : action.payload }};
        })
        .addCase(UIActions.setActiveToDefault.type , (state) => {
            return {...state , currentProd : { pending : true , failed : false , data : { } }}
        })
})

export default UIReducer;