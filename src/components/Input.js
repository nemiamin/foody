import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import { width } from '../assets/dimensions';

 const Input = ({ up, changeInput, value, secureTextEntry, name, color, normal, mar, up_b, placeholder }) => {
    return (
        <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} name={name} onChangeText={(e) => changeInput(e, name)} style={{ ...styles.input, borderTopLeftRadius: up ? width * 0.06 : 0 ,
            borderBottomRightRadius: !up ? !normal ? width * 0.06 : 0 : 0, backgroundColor: color ? color : 'white', marginVertical: mar ? 6 : 0, borderTopRightRadius: up_b ? width * 0.06 : 0, textAlign: 'center' }} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white'
    }
})

export default Input