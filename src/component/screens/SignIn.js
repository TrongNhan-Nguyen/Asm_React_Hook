/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import styles from '../styles/StylesSignIn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {signIn, startSignIn} from '../../redux/actions/User';
import auth from '@react-native-firebase/auth';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '403369308124-94tj73sv9155unsguk0e2s1amq4l27ht.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('nhan@gmail.com');
  const [pass, setPass] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fireBase = () => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        var newUser = auth().currentUser;
        newUser.type = 'Firebase';
        newUser.pass = pass;
        const actionSignIn = signIn(newUser);
        dispatch(actionSignIn);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast(err + '');
      });
  };
  const sign_up = () => {
    navigation.navigate('SignUp');
  };
  const facebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          toast('Login cancelled');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=name,email,picture.type(large)',
            null,
            getInforFB,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        toast(error + '');
      },
    );
  };

  const getInforFB = (error, result) => {
    if (error) {
      toast(error);
    } else {
      var newUser = {
        displayName: result.name,
        email: result.email,
        photoURL: result.picture.data.url,
        type: 'Facebook',
      };
      const actionSignIn = signIn(newUser);
      dispatch(actionSignIn);
    }
  };

  const google = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const newUser = {
        displayName: userInfo.user.givenName + ' ' + userInfo.user.familyName,
        email: userInfo.user.email,
        photoURL: userInfo.user.photo,
        type: 'Google',
      };
      const actionSignIn = signIn(newUser);
      dispatch(actionSignIn);
    } catch (error) {
      toast(error);
    }
  };
  function toast(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <View style={styles.view_social}>
        <TouchableOpacity
          onPress={facebook}
          activeOpacity={0.7}
          style={styles.social_button}>
          <Icon name="facebook" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={google}
          activeOpacity={0.7}
          style={styles.social_button}>
          <Icon name="google" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10}}>or use your account</Text>
      <TextInput
        onChangeText={(Email) => setEmail(Email)}
        value={email}
        style={styles.input}
        placeholder="Enter your email"
      />
      <TextInput
        onChangeText={(Pass) => setPass(Pass)}
        value={pass}
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter your password"
      />
      <View style={styles.view_buttons}>
        <TouchableOpacity
          onPress={fireBase}
          activeOpacity={0.7}
          style={styles.buton}>
          <Text style={{color: 'white'}}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={sign_up}
          activeOpacity={0.7}
          style={styles.buton}>
          <Text style={{color: 'white'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicator
        style={{marginTop: 20}}
        animating={isLoading}
        color="tomato"
        size={50}
      />
    </View>
  );
};

export default SignIn;
