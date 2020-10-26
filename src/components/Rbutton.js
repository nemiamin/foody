import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { red } from '../assets/colors';

const Rbutton = ({ click, label }) => {
    return (
        <TouchableOpacity onPress={click} style={styles.button}>
            <Text style={styles.text}>
            {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: red,
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 15, 
        fontWeight: 'bold',
        letterSpacing: 1
    }
})

export default Rbutton;