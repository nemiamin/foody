import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { height, width } from '../assets/dimensions';
import { dark_grey } from '../assets/colors';

 const Button = ({ label, clickEvent }) => {
    return (
       <TouchableOpacity style={styles.button} onPress={clickEvent}>
           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                {label}
           </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: width * 0.15,
        backgroundColor: dark_grey,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.02
    }
})

export default Button