/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import SingUp from './SingUp';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SingUp}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
