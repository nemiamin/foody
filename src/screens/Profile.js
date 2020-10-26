import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet , Text, BackHandler } from 'react-native';
import Header from '../components/Header';
import { light_green, light_grey, red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Labels from '../components/Labels';
import Input from '../components/Input';
import { ScrollView } from 'react-native-gesture-handler';

 const Profile = ({ navigation }) => {
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
     const [ form, setForm ] = useState({
         name: '', mobile: '', address: ''
     });
     const change = (e, name) => {
        setForm({
            ...form, [name]: e
        })
     }
     const { name, mobile, address } = form;
    return (
        
       <View style={styles.main}>
           <View>
               <Header image={false} navigation={navigation} />
           </View>
           <View style={styles.imageContainer}>
               <Image source={require('../assets/profile_1.png')} style={{
                   width: 150, height: 150
               }} />
               <Text style={{ marginTop: 12, color: 'white', fontSize: 25, fontWeight: 'bold', letterSpacing: 1 }}>
                   Lorem Ipsum
               </Text>
           </View>
           <View style={styles.cardContainer}>
           {/* <ScrollView style={{ flex: 1 }}> */}
               <Input placeholder='Name' color={light_grey} mar={true} up={true} up_b={true} name='name' value={name} changeInput={change} />
               <Input placeholder='Mobile' normal={true} mar={true} color={light_grey} name='mobile' value={mobile} changeInput={change} />
               <Input placeholder='Address' normal={true} mar={true} color={light_grey} name='address' value={address} changeInput={change} />
               <Labels click={() => navigation.navigate('Delivery')} color={light_green} tcolor='white' label='Update' />
               <Labels click={() => navigation.navigate('Dashboard')} color={red} tcolor='white' label='Back' down={true} />
               {/* </ScrollView> */}
           </View>
       </View>
       
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: red
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.13,
        borderTopRightRadius: width * 0.13,
        paddingVertical: height * 0.06,
        paddingHorizontal: width * 0.04
    }
})

export default Profile
