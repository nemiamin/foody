import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, BackHandler } from 'react-native';
import Header from '../components/Header';
import { height, width } from '../assets/dimensions';
import List from '../components/List';
import {getOrders} from '../action/auth';
import { connect } from 'react-redux';

const Delivery = ({ navigation, getOrders }) => {
    const [orders, setOrder] = useState([])

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
        fetchOrders()
    },[])

    const fetchOrders = async ( ) => {
        const repsonse = await getOrders({
            v_id: '3',
            d_id: '3'
        });
        console.log('======>', repsonse);
        if(repsonse.success) {
            setOrder(repsonse.data);
        }
    }
    return (
        <ImageBackground source={require('../assets/r_back.png')} style={styles.main}>
            <Header back={true} navigation={navigation} />
            <ScrollView style={{ flex: 1, marginHorizontal: 8, marginBottom: 15 }}>
                {orders && orders.length > 0 && orders.map((item, index) => 
                    <List key={index} navigation={navigation} item={item} />
                )}
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height,
        width
    }
})

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        getOrders
    }
) (Delivery)