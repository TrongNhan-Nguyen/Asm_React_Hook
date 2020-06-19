/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, Image, ToastAndroid} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Drawer, TouchableRipple, Switch} from 'react-native-paper';
import styles from '../styles/StylesDrawer';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../redux/actions/User';
import {changeCategory, toggleNotify} from '../../redux/actions/PostAction';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {dbPost, authen} from '../database/Firebase';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import {getNameDrawer} from '../../redux/actions/Drawer';
var PushNotification = require('react-native-push-notification');
PushNotification.configure({
  onRegister: function (token) {},
  onNotification: function (notification) {
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});
const DrawerContent = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isNotify = useSelector((state) => state.post.isNotify);
  const toggle = () => {
    const acitonToggle = toggleNotify();
    dispatch(acitonToggle);
  };
  const changeList = (category) => {
    const actionChangeCategoty = changeCategory(category);
    dispatch(actionChangeCategoty);
    dispatch(getNameDrawer('List Post'));
    navigation.closeDrawer();
    navigation.navigate('List Post');
  };
  const _signOut = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      var currentUser = authen.currentUser;
      if (currentUser !== null) {
        authen.signOut();
      }
      LoginManager.logOut();
      const actionSignOut = signOut();
      dispatch(actionSignOut);
    } catch (error) {
      console.error(error);
    }
  };
  const account = () => {
    const type = user.type;
    if (type === 'Firebase') {
      navigation.navigate('Account');
      dispatch(getNameDrawer('Account'));
    } else {
      ToastAndroid.show('Required account Firebase to continue',ToastAndroid.SHORT);
    }
  };
  const createNotify = () => {
    PushNotification.localNotification({
      title: 'Notification from Firebase',
      message: 'Recent News',
    });
  };
  useEffect(() => {
    if (isNotify) {
      dbPost.on('value', () => {
        createNotify();
      });
    } else {
      dbPost.off('value');
    }
  }, [isNotify]);
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{uri: user.photoURL}}
        />
        <Text style={styles.text}>
          {user.displayName}
        </Text>
        <Text style={styles.text}>
          {user.email}
        </Text>
      </View>
      <DrawerItem
        label="Science"
        inactiveTintColor="black"
        icon={() => <Icon name="laptop-chromebook" size={20} />}
        onPress={() => changeList('Science')}
      />
      <DrawerItem
        label="Health"
        inactiveTintColor="black"
        icon={() => <Icon name="heart-outline" size={20} />}
        onPress={() => changeList('Health')}
      />
      <DrawerItem
        label="Sports"
        inactiveTintColor="black"
        icon={() => <Icon name="swim" size={20} />}
        onPress={() => changeList('Sports')}
      />
      <DrawerItem
        label="Account"
        inactiveTintColor="black"
        icon={() => <Icon name="account-card-details-outline" size={20} />}
        onPress={account}
      />
      <DrawerItem
        label="Sign Out"
        inactiveTintColor="black"
        icon={() => <Icon name="logout" size={20} />}
        onPress={_signOut}
      />
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={toggle}>
          <View style={styles.preference}>
            <Icon style={{marginLeft: 20}} name="bell-ring-outline" size={22} />
            <Text style={{marginLeft: 25}}>Notification</Text>
            <View pointerEvents="none" style={{marginLeft: 60}}>
              <Switch value={isNotify} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
