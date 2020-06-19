/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  TextInput,
} from 'react-native';
import styles from '../styles/StylesComment';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {editComment, deleteComment} from '../database/DbComment';

const CommenRender = (props) => {
  const {item} = props;
  const user = useSelector((state) => state.user.user);
  const [isEdit, setEdit] = useState(false);
  const [comment, setComment] = useState('');
  const userUID = user.uid;
  const commentUID = item.uid;
  const userType = user.type;
  const action = () => {
    if ( userType === 'Firebase') {
      if (userUID === commentUID) {
        Alert.alert(
          'Select your action',
          '',
          [
            {
              text: 'EDIT',
              onPress: () => {
                setEdit(true);
              },
            },
            {
              text: 'DELETE',
              onPress: () => {
                deleteComment(item);
              },
            },
          ],
          {cancelable: true},
        );
      } else {
        ToastAndroid.show('You can not edit this comment', ToastAndroid.SHORT);
      }
    }
  };
  const edit = () => {
    const newComment = item;
    if (comment !== '') {
      newComment.content = comment;
      editComment(newComment);
      setEdit(false);
      setComment('');
    } else {
      ToastAndroid.show('Please, enter your comment', ToastAndroid.SHORT);
    }
  };
  const clear = () => {
    setComment('');
  };
  const cancel = () => {
    setEdit(false);
  };
  return (
    <TouchableOpacity
      onPress={action}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.avatar} source={{uri: item.userPhoto}} />
      </View>
      <View style={styles.right}>
        <View style={styles.right_top}>
          <Text style={styles.name}>{item.userName}</Text>
          <Text style={styles.pubDate}>{item.pubDate}</Text>
        </View>
        <View style={styles.right_bottom}>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
      <Modal isVisible={isEdit}>
        <View style={styles.modal}>
          <Text style={styles.title}>EDIT COMMENT</Text>
          <TextInput
            onChangeText={(Comment) => setComment(Comment)}
            value={comment}
            placeholder="Enter your comment"
            multiline={true}
            style={styles.input}
          />
          <View style={styles.view_button}>
            <TouchableOpacity
              onPress={edit}
              activeOpacity={0.7}
              style={styles.button}>
              <Text>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={clear}
              activeOpacity={0.7}
              style={styles.button}>
              <Text>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancel}
              activeOpacity={0.7}
              style={styles.button}>
              <Text>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default CommenRender;
