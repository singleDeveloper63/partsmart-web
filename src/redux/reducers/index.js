import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';
import UIReducer from './UIReducer';

const rootReducer = combineReducers({
    auth : AuthReducer,
    ui : UIReducer
})

export default rootReducer;