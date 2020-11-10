import React,{useEffect,useState} from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Header from '../components/Header';
import Rbutton from '../components/Rbutton';
import { RNCamera, FaceDetector } from 'react-native-camera';
import {deliverFail} from '../action/auth';
import { connect } from 'react-redux';
import { height, width } from '../assets/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Issue = ({ navigation, deliverFail }) => {
  const [reason, setReason] = useState('');
  const [image, setImage] = useState(null) 
  const [camera, setCamera] = useState(null)
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
    const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data);
      setImage(data)
    }
  };
  const changeInput = (e) => {
    setReason(e);
  }

  const submit = async () => {
    const delivery = await AsyncStorage.getItem('delivery');
    const formData = new FormData()
    formData.append('v_id', JSON.parse(delivery).delivery_boy)
    formData.append('deliveryorder_id', JSON.parse(delivery).deliveryorder_id)
    formData.append('d_id', JSON.parse(delivery).delivery_boy)
    formData.append('snap', {name: 'signature.jpg',
    type: 'img/JPG',
    uri:
      Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
  })
    const response = await deliverFail(formData);
    if(response.success) {
      AsyncStorage.removeItem('deliveryStart');
            AsyncStorage.removeItem('delivery');
            navigation.navigate('Dashboard');
    }
  }
    return (
         <View style={styles.container}>
         <Header back={true} navigation={navigation} />
         <View style={{flex: 2}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 10 }}>
                 ISSUE
             </Text>
         </View>
        <View style={{flex: 3}}>
        {image && <Image source={{uri: image.uri}} style={{height: height*0.4, width:width}} />}
        {!image && <RNCamera
        ref={ref => {
          setCamera(ref)
        }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
      
        />}
        {!image && <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>takePicture()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>}
        
      </View>
      
             <View style={{ flex: 1, marginVertical: 0 }}>
                 <TextInput multiline={true} numberOfLines={10} placeholder='Reason For Cancellation' style={{ backgroundColor: 'white', marginHorizontal: 10, textAlign: 'left', elevation: 6 }} onChangeText={(e)=>changeInput(e)} />
             </View>
             <View style={{ flex: 0.5 }}>
               <Rbutton label='SUBMIT' click={()=>submit()} />
         </View>
         </View>
        // <View style={{ flex: 1 }}>
        // <ScrollView style={{ flex: 1 }}>
            
        //     <Header back={true} navigation={navigation} />
        //     <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 10 }}>
        //         ISSUE
        //     </Text>
           
        //     <View style={{ flex: 0.7, marginVertical: 13 }}>
        //         <TextInput multiline={true} numberOfLines={10} placeholder='Reason For Cancellation' style={{ backgroundColor: 'white', marginHorizontal: 10, textAlign: 'left', elevation: 6 }} />
        //     </View>
        //     <View style={{ flex: 0.1 }}>
        //         <Rbutton label='SUBMIT' />
        //     </View>
            
        // </ScrollView>
        // </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        deliverFail
    }
) (Issue);