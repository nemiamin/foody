import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, BackHandler,Modal, TouchableHighlight  } from 'react-native';
import Header from '../components/Header';
import Setting from '../components/SettingCard';
import Rbutton from '../components/Rbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const Settings = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
                {/* <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label='VIBRATE' s_image={require('../assets/switch.png')} />
                <Setting naivgation={navigation} image={require('../assets/grey_arr.png')} label='SOUND' s_image={require('../assets/switch.png')} /> */}
                <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label="FAQ'S" pressEvent={()=>navigation.navigate('Faq')} />
                {/* <TouchableHighlight onPress={()=>setModalVisible(true)}> */}
                    <Setting naivgation={navigation} image={require('../assets/red_arr.png')} label="LOGOUT" pressEvent={()=>setModalVisible(true)} />
                {/* </TouchableHighlight> */}
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 10 }}>
                <Rbutton click={() => navigation.navigate('Dashboard')} label='BACK' />
            </View>


            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>

            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#f44336" }}
              onPress={() => {
                setModalVisible(false);
                  AsyncStorage.removeItem('user');
                navigation.navigate('GenerateOtp')
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex:1,
        margin:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default Settings;