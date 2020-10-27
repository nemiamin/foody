import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler } from 'react-native';
import { red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { generateUserOtp } from '../action/auth';
import Toast from 'react-native-toast-message';

const GenerateOtp = ({ navigation, generateUserOtp }) => {
    const [ form, setForm ] = useState({
        mobile: ''
    });
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }

    const loginUser = async () => {
        const response = await generateUserOtp(form.mobile);
        if(response.success) {
            
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
        generateUserOtp
    }
) (GenerateOtp)