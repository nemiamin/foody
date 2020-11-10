import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from "react-redux";
import store from "./src/store";
import Alert from './src/components/Alert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isuser, setUser] = useState(false);
  const [deliveryStart, setDeliveryStart] = useState(false);

  useEffect(() => {
      isLoggedIn();
  },[]);

    const isLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      const delivery = await AsyncStorage.getItem('deliveryStart');
      if(delivery) {setDeliveryStart(true);}
      if(user) {setUser(true);}
      setLoading(true);
    }
  return (
    <>
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      {loading && <Navigation isLoggedIn={isuser} deliveryStart={deliveryStart} />}
  <Alert />
  </View>
  </SafeAreaView>
  </Provider>
   </>
  );
};


export default App;
