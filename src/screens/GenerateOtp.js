import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, BackHandler, TouchableHighlight } from 'react-native';
import { red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { generateUserOtp } from '../action/auth';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GenerateOtp = ({ navigation, generateUserOtp }) => {
    const [ form, setForm ] = useState({
        mobile: ''
    });

    const [modalVisible, setModalVisible] = useState(false);
    function handleBackButtonClick() {
      console.log('clicked')
      setModalVisible(true);
      // BackHandler.exitApp();
      return true;
  }
  
  
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        backHandler.remove();
      };
    }, []);

    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }

    const loginUser = async () => {
        const response = await generateUserOtp(form.mobile);
        if(response.success) {
            AsyncStorage.setItem('user', JSON.stringify(response.Data))
              navigation.navigate('Login', {mobile: form.mobile, otp: response.Data.otp});
              setForm({
                mobile: ''
            });
        }
    }

    const { mobile } = form;
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={{
                    height: height * 0.2, width: width * 0.38
                }} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.space}>
                <Text style={styles.text}>
                    Mobile
                </Text>
                <Input changeInput={changeInput} value={mobile} name='mobile' up={true} />
                </View>
                
                <View style={{ marginTop: height * 0.08 }}>
                <Button label={"Submit"} clickEvent={() => loginUser()} />
                </View>
            </View>
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
            <Text style={styles.modalText}>Are you sure you want to close this application?</Text>

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
                BackHandler.exitApp();
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height
    },
    logoContainer: {
        // flex: 0.8,
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
    },
    formContainer: {
        // flex: 1.5,
        height: height * 0.6,
        backgroundColor: red,
        borderTopLeftRadius: width * 0.3,
        paddingHorizontal: width * 0.1,
        justifyContent: 'center'
    },
    space: {
        marginVertical: height * 0.02
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
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


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        generateUserOtp
    }
) (GenerateOtp)