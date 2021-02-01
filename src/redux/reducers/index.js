import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';
import UIReducer from './UIReducer';
import MainReducer from './mainReducer';

const rootReducer = combineReducers({
    auth : AuthReducer,
    ui : UIReducer,
    main : MainReducer
})

export default rootReducer;