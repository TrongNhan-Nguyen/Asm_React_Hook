/* eslint-disable prettier/prettier */
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export const authen = auth();
export const dbPost = database().ref('Category');
export const dbUser = database().ref('User');
export const dbComment = database().ref('Comment');
export const storagePost = storage().ref('ImagePost');
export const storageUser = storage().ref('AvatarUser');
