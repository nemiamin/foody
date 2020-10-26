import { LOGIN, REGISTER, URL, LOAD_USER, LOAD_ERROR, USER_DATA } from './types';
import * as axios from 'axios';
import {toast} from './toast';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
}

export const login = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`${URL}/delivery-login`, payload, config);
        console.log(response.data);
        dispatch(toast('success', 'Logged in successfully'));
        // dispatch({
        //     type: LOAD_USER,
        //     payload: res
        // });
     
        return {
            success: true, data: response.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}