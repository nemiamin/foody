import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { height, width } from '../assets/dimensions';

 const Labels = ({ label, color, up, down, tcolor, click }) => {
    return (
        <TouchableOpacity onPress={click} style={{...styles.label, backgroundColor: color, borderTopRightRadius: up ? width : 0, borderTopLeftRadius: up ? width : 0, borderBottomRightRadius: down ? width : 0, borderBottomLeftRadius: down ? width : 0 }}>
            <Text style={{ letterSpacing: 1, fontSize: 19, fontWeight: '800', color: tcolor ? tcolor : 'black' }}>
            {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    label: {
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: height * 0.01
    }
})

export default Labels