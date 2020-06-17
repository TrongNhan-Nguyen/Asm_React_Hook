/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import {option} from '../drawer/DrawerStack';
import ModalAdd from './ModalAdd';
import DetailPost from '../drawer/DetailPost';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={option} />
      <Stack.Screen
        name="Add post"
        component={ModalAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPost}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
