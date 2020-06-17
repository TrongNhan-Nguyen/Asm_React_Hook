/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyB5Y7eRvaFkC8Tq4cQdC73wzDywTjEPK4Y',
  authDomain: 'asm-react-hook.firebaseapp.com',
  databaseURL: 'https://asm-react-hook.firebaseio.com',
  projectId: 'asm-react-hook',
  storageBucket: 'asm-react-hook.appspot.com',
  messagingSenderId: '403369308124',
  appId: '1:403369308124:web:461b3c970bc3a7b9e5e919',
  measurementId: 'G-QL9SGSRHWY',
};
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
export default FirebaseApp;

