/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AppStack from './Stack/AppStack';
import AuthStack from './Stack/AuthStack';

const Main = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default Main;
