/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import styles from '../styles/StylesModal';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import {addPost} from '../database/Post';
const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ModalAdd = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [category, setCategory] = useState('Science');
  const [uri, setUri] = useState(null);
  const [path, setPath] = useState(null);
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

  const submit = () => {
    if ((title === '', descriptions === '')) {
      toast('Please, fill up the form');
    } else if (path === null) {
      toast('No photos selected');
    } else {
      const post = {
        title: title,
        descriptions: descriptions,
        category: category,
      };

      addPost(post, path);
      navigation.navigate('List Post');
    }
  };
  const clear = async () => {
    setDescriptions('');
    setTitle('');
  };
  const cancel = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD POST</Text>
      <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
        <Image style={styles.image} source={uri} />
      </TouchableOpacity>
      <View style={styles.container_picker}>
        <Text style={styles.text_picker}>Choose Category: </Text>
        <Picker
          selectedValue={category}
          style={styles.picker}
          mode="dropdown"
          onValueChange={(value) => setCategory(value)}>
          <Picker.Item label="Science" value="Science" />
          <Picker.Item label="Health" value="Health" />
          <Picker.Item label="Sports" value="Sports" />
        </Picker>
      </View>
      <TextInput
        onChangeText={(Title) => setTitle(Title)}
        value={title}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        onChangeText={(Descriptions) => setDescriptions(Descriptions)}
        value={descriptions}
        placeholder="Descriptions"
        textAlignVertical="top"
        multiline={true}
        style={[styles.input, {height: 120}]}
      />
      <View style={styles.view_button}>
        <TouchableOpacity
          onPress={submit}
          activeOpacity={0.7}
          style={styles.button}>
          <Text> SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clear}
          activeOpacity={0.7}
          style={styles.button}>
          <Text> CLEAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={cancel}
          activeOpacity={0.7}
          style={styles.button}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function toast(msg) {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
}

export default ModalAdd;
