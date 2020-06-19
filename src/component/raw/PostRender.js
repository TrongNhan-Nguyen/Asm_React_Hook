/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/StylesRender';
import {useDispatch} from 'react-redux';
import {getPost} from '../../redux/actions/PostAction';
import {AccessToken, ShareDialog, LoginManager} from 'react-native-fbsdk';
import {showModal, getKeyPost} from '../../redux/actions/Modal';
const PostRender = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const details = () => {
    const actionGetPost = getPost(item);
    dispatch(actionGetPost);
    props.navigation.navigate('Detail');
  };
  const share = (photoUri) => {
    AccessToken.getCurrentAccessToken().then((data) => {
      if (data == null) {
        LoginManager.logInWithPermissions(['public_profile']).then(
          function (result) {
            if (result.isCancelled) {
              console.log('Login cancelled');
            } else {
              console.log(
                'Login success with permissions: ' +
                  result.grantedPermissions.toString(),
              );
            }
          },
          function (error) {
            console.log('Login fail with error: ' + error);
          },
        );
      } else {
        const sharePhotoContent = {
          contentType: 'photo',
          photos: [{imageUrl: photoUri}],
        };
        ShareDialog.show(sharePhotoContent);
      }
    });
  };
  const comment = () => {
    dispatch(showModal());
    dispatch(getKeyPost(item.key));
  };
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: item.url}} />
        <View style={styles.bar}>
          <Text style={styles.pubDate}>{item.pubDate}</Text>
          <TouchableOpacity
            onPress={comment}
            style={{position: 'absolute', right: 60}}>
            <Icon name="comment" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => share(item.url)}
            style={{position: 'absolute', right: 10}}>
            <Icon name="share-variant" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={details} activeOpacity={0.7}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.descriptions} numberOfLines={4}>
          {item.descriptions}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostRender;
