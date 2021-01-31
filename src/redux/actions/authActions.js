import { createAction , createAsyncThunk } from '@reduxjs/toolkit';
import { AuthAPI } from '../../api/auth';

const authActions = {
    signUp : createAsyncThunk("auth/signup", async (data , { dispatch }) =>{
        const result = await AuthAPI.signUp(data);
        return result.data;
    }),
    signIn : createAsyncThunk("auth/signin", async (data , { dispatch }) =>{
        const result = await AuthAPI.signIn(data);
        return result.data;
    })
}

export default authActions;