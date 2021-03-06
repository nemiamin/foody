import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { light_green, light_grey } from '../assets/colors';
import { height, width } from '../assets/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const List = ({navigation, item}) => {

    const startDelivery = (item) => {
        AsyncStorage.setItem('deliveryStart', 'true');
        AsyncStorage.setItem('delivery', JSON.stringify(item));
        navigation.navigate('Map', {item: item})
    }
    return (
        <View style={styles.list}>
            <View style={styles.r}>
                <View style={{ flex: 0.2 }}>
                    <Image source={require('../assets/truck_s.png')} style={{ height: 30, width: 40 }} />
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={{ letterSpacing: 1 }}>
                        Delivery #{item.deliveryorder_id}
                    </Text>
                </View>
            </View>
            <View style={styles.r}>
                <View style={{ flex: 0.2 }}>
                    <Image source={require('../assets/item_s.png')} style={{ height: 30, width: 40 }} />
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={{ letterSpacing: 1 }}>
                        {item.order_count} Items
                    </Text>
                </View>
            </View>
            <View style={styles.r}>
                <View style={{ flex: 0.2 }}>
                    <Image source={require('../assets/location_s.png')} style={{ height: 30, width: 40 }} />
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={{ letterSpacing: 1 }}>
                        {item.dropadd}
                    </Text>
                </View>
            </View>
            <View style={styles.r}>
                <View style={{ flex: 0.2 }}>
                    <Image source={require('../assets/user_s.png')} style={{ height: 30, width: 40 }} />
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={{ letterSpacing: 1 }}>
                        {item.company_name}
                    </Text>
                </View>
            </View>
        <View style={styles.b}>
        <View style={{ flex: 0.6 }}></View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={() => startDelivery(item)}>
                <Text style={{ fontSize: 18, color: 'white' }}>
                    Start
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    r: {
        backgroundColor: light_grey,
        marginVertical: 2,
        flexDirection: 'row',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.01
    },
    b: {
        backgroundColor: 'white',
        marginVertical: 2,
        flexDirection: 'row',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.01
    },
    list: {
        backgroundColor: 'white',
        marginVertical: 5
        // marginHorizontal: width * 0.02
    },button: {
        backgroundColor: light_green,
        paddingVertical: height * 0.006,
        paddingHorizontal: width * 0.1
    }
})

export default List