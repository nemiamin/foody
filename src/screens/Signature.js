import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import Header from '../components/Header';
import Rbutton from '../components/Rbutton';
import SignatureCapture from 'react-native-signature-capture';
import {deliverSuccess, showMsg} from '../action/auth';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const Signature = ({ navigation, deliverSuccess, showMsg }) => {
    const [ sign, setSign ] = useState(null);
    // console.log(si)
    const reset = () => {
        sign.saveImage();
    }

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }
    
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        backHandler.remove();
      };
    }, []);

    const _onSaveEvent = async (result) => {
        console.log('result =+++++++>', result)
        if(result){
            const delivery = await AsyncStorage.getItem('delivery');
        const formData =  new FormData()
        formData.append('v_id', JSON.parse(delivery).delivery_boy)
        formData.append('deliveryorder_id', JSON.parse(delivery).deliveryorder_id)
        formData.append('d_id', JSON.parse(delivery).delivery_boy)
        const response = await deliverSuccess(formData);
        // if(response.success) {
            showMsg('success', 'Success');
            AsyncStorage.removeItem('deliveryStart');
            AsyncStorage.removeItem('delivery');
            navigation.navigate('Dashboard');
        // }
        } else {
            showMsg('err', 'Signature is required!')
        }
    }
    return (
       <View style={{ flex: 1 }}>
           <Header back={true} navigation={navigation} />
           <View style={{ flex: 1, paddingVertical: 10, justifyContent: 'center' }}>
           <SignatureCapture onSaveEvent={_onSaveEvent} ref={ref => setSign(ref)} showNativeButtons={false} style={{ flex: 1 }} />
           </View>
           <View style={{ justifyContent: 'flex-end', paddingTop: 10 }}>
               <Rbutton label='SUBMIT' click={reset} />
           </View>
       </View>
    )
}

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        deliverSuccess, showMsg
    }
) (Signature)