/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import DrawerContent from '../component/drawer/DrawerContent';
import ListPost from '../component/drawer/ListPost';
import AccountInfo from '../component/drawer/AccountInfo';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="List Post"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="List Post" component={ListPost} />
      <Drawer.Screen name="Account" component={AccountInfo} />
    </Drawer.Navigator>
  );
};
export const option = ({navigation}) => {
  return {
    title: 'POST APP',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity
        style={{marginLeft: 10}}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="bars" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default DrawerStack;
