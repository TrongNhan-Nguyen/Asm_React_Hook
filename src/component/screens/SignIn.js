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
import {GoogleSignin} from '@react-native-community/google-signin';
import styles from '../styles/StylesSignIn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/actions/User';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '403369308124-94tj73sv9155unsguk0e2s1amq4l27ht.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
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
      .then(({user}) => {
        user.type = 'Firebase';
        user.pass = pass;
        const actionSignIn = signIn(user);
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
    setIsLoading(true);
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          toast('Login cancelled');
          setIsLoading(false);
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            return auth()
              .signInWithCredential(facebookCredential)
              .then(({user}) => {
                user.type = 'Facebook';
                dispatch(signIn(user));
                setIsLoading(false);
              });
            //  lay info fb neu khong su dung signInWithCredential
            // const infoRequest = new GraphRequest(
            //   '/me?fields=name,email,picture.type(large)',
            //   null,
            //   getInforFB,
            // );
            // new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function (error) {
        toast(error + '');
        setIsLoading(false);
      },
    );
  };

  // const getInforFB = (error, result) => {
  //   if (error) {
  //     toast(error);
  //   } else {
  //     var newUser = {
  //       displayName: result.name,
  //       email: result.email,
  //       photoURL: result.picture.data.url,
  //       type: 'Facebook',
  //     };
  //     const actionSignIn = signIn(newUser);
  //     dispatch(actionSignIn);
  //   }
  // };

  const google = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      return auth()
        .signInWithCredential(googleCredential)
        .then(({user}) => {
          user.type = 'Google';
          dispatch(signIn(user));
          setIsLoading(false);
        });
    } catch (error) {
      toast(error);
      setIsLoading(false);
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
