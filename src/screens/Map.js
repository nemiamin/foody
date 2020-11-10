import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, BackHandler } from 'react-native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import Rbutton from '../components/Rbutton';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { updateOrder, fetchAddressDetail } from '../action/auth';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Map({navigation, route, fetchAddressDetail, updateOrder}) {
    const [item, setItem] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [lat2, setLat2] = useState(null);
    const [long2, setLong2] = useState(null);
    const [user, setUser] = useState(null)

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

    useEffect(()=>{
        getDeliveryDetail()
    },[])

    const getDeliveryDetail = async () => {
        const data = await AsyncStorage.getItem('delivery');
        const user = await AsyncStorage.getItem('user');
        setUser(JSON.parse(user))
        setItem(JSON.parse(data));
        setTimeout(()=>{
            updateDeliveryOrder();
            fetchAddress()
        },2000)
        
    }

    const updateDeliveryOrder = async () => {
        console.log('item ++++++>', item)
        console.log('user =++++++++>', user)
        const response = await updateOrder({
            v_id: item.deliveryorder_id,
            d_id: item.deliveryorder_id,
            deliveryorder_id: item.deliveryorder_id
        });
        console.log('update order respnse =++++>', response.data)
    }

    const fetchAddress = async () => {
        const item2 = JSON.parse(await AsyncStorage.getItem('delivery'));
        console.log('item.pickup', item2.pickup)
        if(item2) {
            const resposne = await fetchAddressDetail(item2.pickup)
        if(resposne) {
            console.log('google api +++++++>', resposne.data.results[0].geometry.location.lat);
            setLat(resposne.data.results[0].geometry.location.lat);
            setLong(resposne.data.results[0].geometry.location.lng);
            const response2 = await fetchAddressDetail(item2.dropadd);
        if(response2) {
            // console.log('google api 2 +++++++>', response2);
            setLat2(response2.data.results[0].geometry.location.lat);
            setLong2(response2.data.results[0].geometry.location.lng)
        }
        }
        }

        
    }


    return (
            <SafeAreaView style={{flex: 1,}}>
                {lat2 && long2 && <MapView  style={{flex: 1,height:height, width:width,}}  showsUserLocation={true}
            zoomEnabled={true}
            provider={PROVIDER_GOOGLE}
            region={{ latitude: lat,longitude: long,latitudeDelta: 0.0922,longitudeDelta: 0.0421 }} 
             >
   

<Marker
      coordinate={{latitude: lat2,longitude: long2}}
      title={'hi'}
      description={'marker.description'}
    />

<Marker
      coordinate={{latitude: lat,longitude: long}}
      title={'hi'}
      description={'marker.description'}
    />




             </MapView>}
            <View style={{position:'relative'}}>
                
                 

                <View style={{position:'relative'}}>
                    <View style={{position:'absolute',bottom: 25, backgroundColor: 'lightgrey', width: width-40, marginHorizontal: 20,}}>
                   <View style={{display:'flex', flexDirection:'row'}}>
                         <View style={{display:'flex', flex:2, borderRightColor:'white', borderRightWidth:2}}>
                        <View>
                            <View style={{display:'flex', flexDirection: 'row', borderBottomColor:'white', borderBottomWidth: 2,padding:4}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/user.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    {item ? item.company_name : ''}
                                </Text>
                            </View>

                            
                        </View>


                         <View style={{display:'flex', flexDirection: 'row', padding:4,borderBottomColor:'white', borderBottomWidth: 2,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/location_s.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    {item ? item.dropadd : ''}
                                </Text>
                            </View>

                            
                        </View>



                        <View style={{display:'flex', flexDirection: 'row', padding:4,borderBottomColor:'white', borderBottomWidth: 2,}}>
                            <View style={{flex:1}}>
                                <Image source={require('../assets/call.png')} style={{height: 30, width:30}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text>
                                    9891XXXXXX
                                </Text>
                            </View>

                            
                        </View>

                        <View style={{display:'flex', flexDirection: 'row', padding:4,borderBottomColor:'white', borderBottomWidth: 2,}}>
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
                    <View style={{flex:1,padding:6}}>
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

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        fetchAddressDetail, updateOrder
    }
) (Map)