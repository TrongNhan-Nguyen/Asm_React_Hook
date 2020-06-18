/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../component/screens/Home';
import DetailPost from '../component/drawer/DetailPost';
import AddPost from '../component/screens/AddPost';
import { option } from './DrawerStack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={option} />
      <Stack.Screen
        name="Add post"
        component={AddPost}
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
