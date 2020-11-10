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
        const response = await axios.post(`http://food.breeur.in/api/dutymanagerverfy.php`, payload, config);
        console.log(response.data);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', response.data.message));
            return response.data
        } else {
            dispatch(toast('errr', response.data.message));
            return {success: false}
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

export const generateUserOtp = (mobile) => async dispatch => {
    try {
        // console.log('API clled')
        if(!mobile) {
            dispatch(toast('err', 'Mobile is required!'));
            return {success: false}
        } else {
            const response = await axios.post(`http://food.breeur.in/api/dutymanagerlogin.php/${mobile}`, config);
            console.log(response.data);
            if(response.data.success) {
                dispatch(toast('success', response.data.message));
                return response.data;
            } else {
                dispatch(toast('err', response.data.message));
                return {success: false}
            }
        }
       
    } catch (error) {
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

export const getOrders = (payload) => async dispatch => {
    try {
      
            const response = await axios.post(`http://food.breeur.in/api/deliveryboyorder.php`, payload, config);
            console.log(response)
            if(response.data.success) {
                // dispatch(toast('success', response.data.message));
                return response.data;
            } else {
                dispatch(toast('err', response.data.message));
                return {success: false}
            }
       
    } catch (error) {
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

export const updateOrder = (payload) => async dispatch => {
    try {
      
            const response = await axios.post(`http://food.breeur.in/api/updateorder.php`, payload, config);
            console.log(response);
            if(response.data.success) {
                // dispatch(toast('success', response.data.message));
                return response.data;
            } else {
                dispatch(toast('err', response.data.message));
                return {success: false}
            }
       
    } catch (error) {
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

export const fetchAddressDetail = (address) => async dispatch => {
    try {
      
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDYPLNcKkg1ZoNEUQBEv7apzakTuCrcUug`);
        return response;
   
} catch (error) {
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

export const deliverSuccess = (payload) => async dispatch => {
    try {
      
        const response = await axios.post(`http://food.breeur.in/api/updateorderdone.php`, payload,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        });
        // console.log(response);
        return response
        // if(response.data.success) {
        //     // dispatch(toast('success', response.data.message));
        //     return response.data;
        // } else {
        //     dispatch(toast('err', response.data.message));
        //     return {success: false}
        // }
   
} catch (error) {
    console.log(error);
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

export const deliverFail = (payload) => async dispatch => {
    try {
      
        const response = await axios.post(`http://food.breeur.in/api/updateorderfail.php`, payload,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        });
        if(response.data.success) {
            dispatch(toast('success', response.data.message));
            return response.data;
        } else {
            dispatch(toast('err', response.data.message));
            return {success: false}
        }
   
} catch (error) {
    console.log(error);
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

export const showMsg = (type, msg) => async dispatch => {
    dispatch(toast(type, msg));
}