import React,{useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, BackHandler } from 'react-native';
import Header from '../components/Header';
import { height, width } from '../assets/dimensions';
import List from '../components/List';

const Delivery = ({ navigation }) => {
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
    console.log(navigation, 'navigation')
    return (
        <ImageBackground source={require('../assets/r_back.png')} style={styles.main}>
            <Header back={true} navigation={navigation} />
            <ScrollView style={{ flex: 1, marginHorizontal: 8, marginBottom: 15 }}>
                <List navigation={navigation} />
                <List navigation={navigation} />
                <List navigation={navigation} />
                <List navigation={navigation} />
                <List navigation={navigation} />
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

export default Delivery