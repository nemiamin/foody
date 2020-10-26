import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, BackHandler, } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {height, width} from '../assets/dimensions';

const Dashboard = ({ navigation, currentScreen }) => {

  function handleBackButtonClick() {
      BackHandler.exitApp();
      return true;
  }

  const [canCloseApp, setApp] = useState(true);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
        <View style={styles.header}>
      <Header image={true} navigation={navigation} />
      </View>
      <ScrollView style={{ flex: 1, marginHorizontal: 8, marginBottom: 15 }}>
      <View style={styles.upper}>
        <View style={styles.cardView}>
          <View style={styles.card}>
            <Card click={() => navigation.navigate('Delivery')} label='Deliveries' image={require('../assets/truck.png')} />
          </View>
          <View style={styles.card}>
            <Card  click={() => navigation.navigate('Orders')} label='Past Orders' image={require('../assets/tick.png')} />
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.card}>
            <Card click={() => navigation.navigate('Settings')} label='Deliveries' image={require('../assets/setting.png')} />
          </View>
          <View style={styles.card}>
            <Card click={() => navigation.navigate('Profile')} label='Profile' image={require('../assets/user.png')} />
          </View>
        </View>
    
      </View>


      <View style={styles.lower}>
      <Image source={require('../assets/bik2.png')} style={{
                
            }} />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upper: {
    flex: 1.2,
  },
  lower: {
    flex: 1,
  },
  cardView: {
    flexDirection: 'row',
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.012
  },
  card: {
    flex: 1,

  },
  header: {
      marginBottom: height * 0.04
  }
});

export default Dashboard;
