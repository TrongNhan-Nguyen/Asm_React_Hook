/* eslint-disable react-native/no-inline-styles */
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
import styles from '../styles/StylesSignUp';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-picker';
import { storageUser } from '../database/Firebase';
const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const SingUp = ({navigation}) => {
  const {navigate} = navigation;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [uri, setUri] = useState(null);
  const [path, setPath] = useState(null);
  const clear = () => {
    setEmail('');
    setName('');
    setPass('');
  };
  const pickImage = () => {
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
    var user = auth().currentUser;
    var storageAvatar = storageUser.child(user.uid);
    storageAvatar
      .putFile(path, {contentType: 'image/png'})
      .then(() => {
        return storageAvatar.getDownloadURL();
      })
      .then((url) => {
        user
          .updateProfile({
            displayName: name,
            photoURL: url,
          })
          .then(() => {
            console.log('Account created');
            navigation.navigate('SignIn');
          });
      });
  };
  const submit = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => updateProfile())
      .catch((err) => console.log(err));
  };
  const signIn = () => {
    navigate('SignIn');
  };
  function toast(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Friend!</Text>
      <Text style={styles.msg}>
        Enter your details and start journey with us
      </Text>
      <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
        <Image style={styles.avatar} source={uri} />
      </TouchableOpacity>
      <TextInput
        onChangeText={(Name) => setName(Name)}
        value={name}
        placeholder="Enter your display name"
        style={styles.input}
      />
      <TextInput
        onChangeText={(Email) => setEmail(Email)}
        value={email}
        placeholder="Enter your email"
        style={styles.input}
      />
      <TextInput
        onChangeText={(Pass) => setPass(Pass)}
        value={pass}
        placeholder="Enter your password"
        style={styles.input}
      />
      <View style={styles.view_buttons}>
        <TouchableOpacity
          onPress={submit}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={{color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clear}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={{color: 'white'}}>CLEAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signIn}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={{color: 'white'}}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingUp;
