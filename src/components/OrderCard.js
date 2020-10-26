import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { light_grey } from '../assets/colors';
import { height, width } from '../assets/dimensions';

 const OrderCard = () => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.entry}>
                <Text style={styles.text}>
                    Delivery No :
                </Text>
            </View>
            <View style={styles.entry}>
                <Text style={styles.text}>
                    Date :
                </Text>
            </View>
            <View style={styles.entry}>
                <Text style={styles.text}>
                    Status : Delivered
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: light_grey,
        borderRadius: 15,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.02,
        marginVertical: height * 0.01
    },
    entry: {
        flexDirection: 'row',
        marginVertical: height * 0.01
    },
    text: {
        fontSize: 15,
        letterSpacing: 1
    }
})


export default OrderCard