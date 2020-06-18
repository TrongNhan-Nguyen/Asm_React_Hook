/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerStack from '../../Stack/DrawerStack';
const Home = ({navigation}) => {
  const admin = useSelector((state) => state.user.isAdmin);
  const addPost = () => {
    navigation.navigate('Add post');
  };
  return (
    <View style={styles.cotainer}>
      <DrawerStack />
      {admin ? (
        <TouchableOpacity onPress={addPost} style={styles.fab}>
          <Icon name="plus" size={30} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 50,
    width: 50,
    backgroundColor: 'tomato',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
