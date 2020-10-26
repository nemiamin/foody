import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler } from 'react-native';
import { red } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { login } from '../action/auth';
import Toast from 'react-native-toast-message';

const Login = ({ navigation, login }) => {
    const [ form, setForm ] = useState({
        email: '', password: ''
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
                email: '', password: ''
            });
              navigation.navigate('Dashboard');
            console.log(response.data);
        }
    }

    const { email, password } = form;
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
                    UserName
                </Text>
                <Input changeInput={changeInput} value={email} name='email' up={true} />
                </View>
                <View style={styles.space}>
                <Text style={styles.text}>
                    Password
                </Text>
                <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} />
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