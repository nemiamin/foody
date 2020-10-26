import React, {useState} from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { height } from '../assets/dimensions';
import ToggleSwitch from 'toggle-switch-react-native';
const SettingCard = ({ image, naivgation, label, s_image }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <TouchableOpacity style={styles.card} onPress={() => label == 'LOGOUT' ? naivgation.navigate('Login') : naivgation.navigate('Faq')}>
            <View style={{
                flex: 1, alignItems: 'flex-start'
            }}>
                <Image source={image}  style={{
                height: 90
            }} />
            </View>
            <View style={{
                flex: 3, justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 20, letterSpacing: 1, fontWeight: 'bold' }}>
                    {label}
                </Text>
            </View>
            <View style={{
                flex: 2, justifyContent: 'center'
            }}>
                {(label !== "FAQ'S" && label !== 'LOGOUT') && <ToggleSwitch
                isOn={toggle}
                onColor="red"
                offColor="grey"
                label=""
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onToggle={isOn => setToggle(!toggle)}
                />}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 2,
        marginVertical: 9
    }
})

export default SettingCard