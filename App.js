import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from "react-redux";
import store from "./src/store";
import Alert from './src/components/Alert';

const App = () => {
  return (
    <>
    {/* <RemotePushController /> */}
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
  <Navigation />
  <Alert />
  </View>
  </SafeAreaView>
  </Provider>
   </>
  );
};


export default App;
