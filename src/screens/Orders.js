import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native'
import Header from '../components/Header';
import Card from '../components/Card';
import Order from '../components/OrderCard';
import { off_white } from '../assets/colors';
import { height } from '../assets/dimensions';

const Orders = ({ navigation }) => {
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
       <View style={styles.main}>
           <Header back={true} navigation={navigation} />
           <View style={styles.card}>
               <View style={{
                   marginHorizontal: 10, marginBottom: height * 0.02
               }}>
           <Text style={styles.text}>
                PAST ORDERS
           </Text>
           </View>
           <Order />
           <Order />
           </View>
           <View style={{alignContent:'center', alignItems:'center'}}>
      <Image source={require('../assets/animal.png')} style={{
                
            }} />
      </View>
       </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: off_white
    },
    card: {
        paddingHorizontal: 8,
        marginVertical: 10
        },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Orders