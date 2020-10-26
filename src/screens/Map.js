import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, BackHandler } from 'react-native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import Rbutton from '../components/Rbutton';
function Map({navigation}) {
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
        
            <SafeAreaView>
            <View>
                <View>
                    <Image source={require('../assets/map.png')} style={{width, height}} />
                </View>

                <View>
                    <View style={{position:'absolute',bottom: 50, backgroundColor: 'lightgrey', width: width-40, marginHorizontal: 20,}}>
                   <View style={{display:'flex', flexDirection:'row'}}>
                         <View style={{display:'flex', flex:2, borderRightColor:'white', borderRightWidth:2}}>
                        <View>
                            <View style={{display:'flex', flexDirection: 'row', borderBottomColor:'white', borderBottomWidth: 2,padding:10}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/user.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    JOHN DOE
                                </Text>
                            </View>

                            
                        </View>


                         <View style={{display:'flex', flexDirection: 'row', padding:10,borderBottomColor:'white', borderBottomWidth: 2,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/location_s.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    ADDRESS
                                </Text>
                            </View>

                            
                        </View>



                        <View style={{display:'flex', flexDirection: 'row', padding:10,borderBottomColor:'white', borderBottomWidth: 2,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/call.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    9891XXXXXX
                                </Text>
                            </View>

                            
                        </View>

                        <View style={{display:'flex', flexDirection: 'row', padding:10,borderBottomColor:'white', borderBottomWidth: 2,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/note.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    NOTE
                                </Text>
                            </View>

                            
                        </View>
                        </View>
                        
                    </View>
                    <View style={{flex:1,padding:20}}>
                                <Image source={require('../assets/distance.png')} style={{height: 90, width:90}} />
                                <View style={{marginTop:20, padding:10}}>
                                    <Text>
                                        0.4 kms
                                    </Text>
                                    <Text>
                                        01: 24
                                    </Text>
                                </View>
                            </View>
        
                </View>
                  
                  <View style={{borderBottomColor:'white', borderBottomWidth:2}}>
                    <Rbutton label='DELIVER' click={() => navigation.navigate('Signature')} />

                </View>
                <View>
                    <Rbutton label='ISSUE' click={() => navigation.navigate('Issue')} />
                    
                </View>
                   </View>
                 
                </View>
                 
             
            </View>
           
            </SafeAreaView>
       
    )
}

export default Map
