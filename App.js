import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Strore';
import {PermissionsAndroid, View} from 'react-native';
import Main from './src/Main';
// import Main from './src/Main';

const App = () => {
  // requestPermissions();
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
    
  );
};
const requestPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    console.log(JSON.stringify(granted));
  } catch (e) {
    console.log(e);
  }
};
export default App;
