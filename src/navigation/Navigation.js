import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// importing screens
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Delivery from '../screens/Delivery';
import Orders from '../screens/Orders';
import Settings from '../screens/Settings';
import Faq from '../screens/Faq';
import Signature from '../screens/Signature';
import Issue from '../screens/Issue';
import Map from '../screens/Map';
import GenerateOtp from '../screens/GenerateOtp';


const UiStack = createStackNavigator();
const UiNavigator = ({ navigation }) => (
    <UiStack.Navigator headerMode='none'>
         <UiStack.Screen name='GenerateOtp' component={GenerateOtp} />
        <UiStack.Screen name='Login' component={Login} />
        <UiStack.Screen name='Dashboard' component={Dashboard} />
        <UiStack.Screen name='Profile' component={Profile} />
        <UiStack.Screen name='Delivery' component={Delivery} />
        <UiStack.Screen name='Orders' component={Orders} />
        <UiStack.Screen name='Settings' component={Settings} />
        <UiStack.Screen name='Faq' component={Faq} />
        <UiStack.Screen name='Signature' component={Signature} />
        <UiStack.Screen name='Issue' component={Issue} />
        <UiStack.Screen name='Map' component={Map} />
       
    </UiStack.Navigator>
)

const Navigation = () => (
    <NavigationContainer>
        <UiNavigator />
    </NavigationContainer>
    )
    
  
    
    export default Navigation