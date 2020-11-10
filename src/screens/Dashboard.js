import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, BackHandler,Modal, Text, TouchableHighlight } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {height, width} from '../assets/dimensions';

const Dashboard = ({ navigation, currentScreen }) => {
  const [modalVisible, setModalVisible] = useState(false);
  function handleBackButtonClick() {
    console.log('clicked')
    setModalVisible(true);
    // BackHandler.exitApp();
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to close this application?</Text>

            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#f44336" }}
              onPress={() => {
                BackHandler.exitApp();
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex:1,
    margin:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Dashboard;
