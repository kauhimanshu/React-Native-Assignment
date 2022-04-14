import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login/Login';
import Signup from '../screen/signup/SignUp';
import ForgotScreen from '../screen/forgotpassword/ForgotPassword';
import MainScreen from '../screen/MainScreen/MainScreen';




const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        useNativeDriver: true,
        headerShown: false,
      }}
      initialRouteName={'MainScreen'}
      detachInactiveScreens={false}>
       <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
     
    
      
    </Stack.Navigator>
  );
};