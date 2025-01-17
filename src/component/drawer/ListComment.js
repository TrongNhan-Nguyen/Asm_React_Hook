/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {hideModal} from '../../redux/actions/Modal';
import {dbComment} from '../database/Firebase';
import {addComment} from '../database/DbComment';
import styles from '../styles/StylesModal';
import CommenRender from '../raw/CommenRender';

const ListComment = () => {
  const [comment, setComment] = useState('');
  const [list, setList] = useState([]);
  const isShow = useSelector((state) => state.modal.isShow);
  const keyPost = useSelector((state) => state.modal.keyPost);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideModal());
  };
  const post = () => {
    if (user) {
      const cmt = {
        content: comment,
        keyPost: keyPost,
        uid: user.uid,
        userMail: user.email,
        userName: user.displayName,
        userPhoto: user.photoURL,
      };
      addComment(cmt);
      setComment('');
    } else {
      console.log('user null');
    }
  };
  const getData = () => {
    if (keyPost !== null) {
      dbComment.child(keyPost).on('value', (snap) => {
        var items = [];
        snap.forEach((child) => {
          items.push(child.val());
        });
        items.sort((a, b) => {
          return b.timeStamp - a.timeStamp;
        });
        setList(items);
      });
    } else {
      dbComment.off('value');
      console.log('keyPost: ' + keyPost);
      setList([]);
    }
  };
  useEffect(() => {
    getData();
  }, [keyPost]);
  return (
    <View>
      <Modal style={styles.container} isVisible={isShow}>
        <View style={styles.view_top}>
          <TouchableOpacity
            style={styles.close}
            onPress={close}
            activeOpacity={0.5}>
            <Text style={styles.text_close}>X</Text>
          </TouchableOpacity>
          <Text style={styles.title}>COMMENT</Text>
        </View>
        <View style={styles.view_middle}>
          <FlatList
            initialNumToRender={1}
            data={list}
            renderItem={({item}) => <CommenRender item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.view_bottom}>
          <TextInput
            onChangeText={(cmt) => setComment(cmt)}
            value={comment}
            multiline={true}
            placeholder="Enter your comment"
            style={styles.input}
          />
          <TouchableOpacity onPress={post} style={styles.post}>
            <Icon name="send-circle-outline" color="tomato" size={35} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ListComment;
