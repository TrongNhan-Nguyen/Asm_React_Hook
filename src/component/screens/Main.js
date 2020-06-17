/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Main = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default Main;
