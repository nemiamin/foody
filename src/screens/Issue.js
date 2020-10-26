import React,{useEffect} from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { height } from '../assets/dimensions';
import Header from '../components/Header';
import Rbutton from '../components/Rbutton';
import { RNCamera, FaceDetector } from 'react-native-camera';

const Issue = ({ navigation }) => {
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
    takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
    return (
         <View style={styles.container}>
         <Header back={true} navigation={navigation} />
         <View style={{flex: 2}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 10 }}>
                 ISSUE
             </Text>
         </View>
        <View style={{flex: 3}}>
       
        <RNCamera
          ref={ref => {
            this.camera = ref;
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
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
             <View style={{ flex: 1, marginVertical: 0 }}>
                 <TextInput multiline={true} numberOfLines={10} placeholder='Reason For Cancellation' style={{ backgroundColor: 'white', marginHorizontal: 10, textAlign: 'left', elevation: 6 }} />
             </View>
             <View style={{ flex: 0.5 }}>
               <Rbutton label='SUBMIT' />
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

export default Issue