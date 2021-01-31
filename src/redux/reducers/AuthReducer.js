import { createReducer } from '@reduxjs/toolkit';
import { AuthActions } from '../actions';

const authInitial = {
    signIn : {
        authenticated : false,
        status : {
            success : false,
            pending : false,
            failed : false
        }
    },
    signup : {
        status : {
            success : false,
            pending : false,
            failed : false
        }
    }
}  

const AuthReducer = createReducer(authInitial , builder => {
    builder
        //SIGNUP action handlers
        .addCase(AuthActions.signUp.pending , (state) =>{
            return {...state , signup : { ...state.signup , status : { ...state.signup.status , pending : true } }};
        })
        .addCase(AuthActions.signUp.fulfilled , (state) =>{
            return {...state , signup : { ...state.signup , status : { ...state.signup.status , pending : false , success : true } }};
        })
        .addCase(AuthActions.signUp.rejected , (state ) =>{
            return {...state , signup : { ...state.signup , status : { failed : true , success : false, pending : false ,  } }};
        })
        //SIGNIN action handlers
        .addCase(AuthActions.signIn.fulfilled , (state , action) =>{
            
        })
})

export default AuthReducer;