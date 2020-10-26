import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { light_grey } from '../assets/colors';
import { height, width } from '../assets/dimensions';

 const Card = ({ label, image, click }) => {
    return (
        <TouchableOpacity onPress={click} style={styles.card}>
            <Image source={image} style={{
                height: 61, width: 60
            }} />
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: width * 0.07,
        backgroundColor: light_grey,
        paddingVertical: height * 0.04,
        // paddingHorizontal: width * 0.001,
        marginHorizontal: width * 0.04,
        alignItems: 'center',
        elevation: 2
    },
    text: {
        fontSize: height * 0.02,
        fontWeight: 'bold',
        marginTop: height * 0.02,
        letterSpacing: 1
    }
})

export default Card