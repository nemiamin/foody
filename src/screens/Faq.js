import React,{useEffect} from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Header from '../components/Header';

 const Faq = ({ navigation }) => {
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5, backgroundColor: 'transparent' }}>

                </View>
                <View style={{ flex: 1.3, borderTopRightRadius: height * 0.1, borderTopLeftRadius: height * 0.1, backgroundColor: 'white', paddingHorizontal: width * 0.1, paddingVertical: height * 0.06 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        FAQ'S
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: red
    }
})

export default Faq