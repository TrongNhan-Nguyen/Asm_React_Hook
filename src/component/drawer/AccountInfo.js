/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import styles from '../styles/StylesAccount';
import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {authen, storageUser} from '../database/Firebase';
import {signOut} from '../../redux/actions/User';
const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const AccountInfo = () => {
  const userUpdate = authen.currentUser;
  const dispath = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [uri, setUri] = useState(null);
  const [path, setPath] = useState(null);
  const [name, setName] = useState(user.displayName);
  const [pass, setPass] = useState(user.pass);
  const [isEdit, setIsEdit] = useState(false);
  const pikerImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const Uri = {uri: response.uri};
        setUri(Uri);
        setPath(response.path);
      }
    });
  };
  const updateProfile = () => {
    var storageAvatar = storageUser.child(userUpdate.uid);
    if (path !== null) {
      storageAvatar
        .putFile(path, {contentType: 'image/png'})
        .then(() => {
          return storageAvatar.getDownloadURL();
        })
        .then((url) => {
          userUpdate
            .updateProfile({
              displayName: name,
              photoURL: url,
            })
            .then(() => {
              toast('Account updated');
              dispath(signOut());
            });
        })
        .catch((err) => toast(err + ''));
    } else {
      userUpdate
        .updateProfile({displayName: name})
        .then(() => {
          toast('Account updated');
          dispath(signOut());
        })
        .catch((err) => toast(err + ''));
    }
  };
  const update = () => {
    if (!isEdit) {
      toast('You nedd to edit your profile first!');
    } else {
      if (pass === '' || name === '') {
        toast('Password or Display name can not empty');
      } else {
        userUpdate
          .updatePassword(pass)
          .then(() => {
            updateProfile();
            setIsEdit(false);
          })
          .catch((err) => console.log(err));
      }
    }
  };
  const edit = () => {
    setIsEdit(true);
  };
  function toast(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>USER'S PROFILE</Text>
      <TouchableOpacity onPress={pikerImage} activeOpacity={0.7}>
        <Image
          style={styles.avatar}
          source={uri ? uri : {uri: user.photoURL}}
        />
      </TouchableOpacity>
      <TextInput value={user.uid} editable={false} style={styles.input} />
      <TextInput value={user.email} editable={false} style={styles.input} />
      <TextInput
        editable={isEdit}
        onChangeText={(Name) => setName(Name)}
        value={name}
        placeholder="Enter your display name"
        style={styles.input}
      />
      <TextInput
        editable={isEdit}
        onChangeText={(Pass) => setPass(Pass)}
        value={pass}
        placeholder="Enter your password"
        style={styles.input}
      />
      <View style={styles.view_button}>
        <TouchableOpacity
          onPress={update}
          activeOpacity={0.5}
          style={styles.button}>
          <Text>UPDATE PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={edit}
          activeOpacity={0.5}
          style={styles.button}>
          <Text>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountInfo;
