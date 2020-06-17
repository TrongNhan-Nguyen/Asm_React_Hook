/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/StylesDetails';
import {useSelector} from 'react-redux';
import {updatePost} from '../database/Post';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const DetailPost = ({navigation}) => {
  const post = useSelector((state) => state.post.post);
  const admin = useSelector((state) => state.user.isAdmin);
  const [title, setTitle] = useState(post.title);
  const [path, setPath] = useState(null);
  const [uri, setUri] = useState(null);
  const [descriptions, setDescriptions] = useState(post.descriptions);
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
  const update = () => {
    const newPost = {
      key: post.key,
      category: post.category,
      title: title,
      descriptions: descriptions,
      pubDate: post.pubDate,
      timeStamp: post.timeStamp,
    };
    updatePost(newPost, path);
    navigation.navigate('List Post');
  };
  const clear = () => {
    setTitle('');
    setDescriptions('');
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        disabled={admin ? false : true}
        onPress={pickImage}
        activeOpacity={0.7}>
        <Image style={styles.image} source={uri ? uri : {uri: post.url}} />
      </TouchableOpacity>
      <TextInput
        editable={admin ? true : false}
        onChangeText={(Title) => setTitle(Title)}
        placeholder="Title"
        value={title}
        style={styles.title}
      />
      <TextInput
        editable={admin ? true : false}
        onChangeText={(Descriptions) => setDescriptions(Descriptions)}
        value={descriptions}
        multiline={true}
        textAlignVertical="top"
        placeholder="Descriptions"
        style={styles.descriptions}
      />
      {admin ? (
        <View style={styles.view_button}>
          <TouchableOpacity
            onPress={update}
            activeOpacity={0.7}
            style={styles.button}>
            <Text> UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={clear}
            activeOpacity={0.7}
            style={styles.button}>
            <Text> CLEAR</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default DetailPost;
