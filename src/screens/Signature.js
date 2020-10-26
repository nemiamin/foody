import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import Header from '../components/Header';
import Rbutton from '../components/Rbutton';
import SignatureCapture from 'react-native-signature-capture';

 const Signature = ({ navigation }) => {
    const [ sign, setSign ] = useState(null);
    // console.log(si)
    const reset = () => {
        sign.resetImage();
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
    return (
       <View style={{ flex: 1 }}>
           <Header back={true} navigation={navigation} />
           <View style={{ flex: 1, paddingVertical: 10, justifyContent: 'center' }}>
           <SignatureCapture ref={ref => setSign(ref)} showNativeButtons={false} style={{ flex: 1 }} />
           </View>
           <View style={{ justifyContent: 'flex-end', paddingTop: 10 }}>
               <Rbutton label='SUBMIT' click={reset} />
           </View>
       </View>
    )
}

export default Signature