import React,{useEffect} from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import Header from '../components/Header';
import Setting from '../components/SettingCard';
import Rbutton from '../components/Rbutton';

 const Settings = ({ navigation }) => {
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
            <Header image={false} navigation={navigation} />
            <View style={{ marginTop: 15, flex: 1 }}>
                <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label='VIBRATE' s_image={require('../assets/switch.png')} />
                <Setting naivgation={navigation} image={require('../assets/grey_arr.png')} label='SOUND' s_image={require('../assets/switch.png')} />
                <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label="FAQ'S" />
                <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label="LOGOUT" />
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 10 }}>
                <Rbutton click={() => navigation.navigate('Dashboard')} label='BACK' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default Settings;