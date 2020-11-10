import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler } from 'react-native';
import { red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { login } from '../action/auth';
import Toast from 'react-native-toast-message';

const Login = ({ navigation, login, route }) => {
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
        if(route.params.otp) {
            setForm({mobile: route.params.mobile, otp: route.params.otp})
        }
    },[])

    const [ form, setForm ] = useState({
        mobile: '', otp: ''
    });
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }

    const loginUser = async () => {
        const response = await login(form);
        if(response.success) {
            setForm({
                mobile: '', otp: ''
            });
              navigation.navigate('Dashboard');
            console.log(response.data);
        }
    }

    const { mobile, otp } = form;
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
                <View style={styles.space}>
                <Text style={styles.text}>
                    OTP
                </Text>
                <Input changeInput={changeInput} value={otp} name='otp' />
                </View>
                <View style={{ marginTop: height * 0.08 }}>
                <Button label={"LOGIN"} clickEvent={() => loginUser()} />
                </View>
            </View>
        </View>
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
    }
})


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        login
    }
) (Login)