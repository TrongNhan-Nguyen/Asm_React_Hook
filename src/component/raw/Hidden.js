/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/StylesHidden';
import {deletePost} from '../database/Post';

const Hidden = (props) => {
  const {rowMap} = props;
  const {item} = props.data;
  const rowKey = props.data.item.key;
  const onclose = (RowMap, RowKey) => {
    if (RowMap[RowKey]) {
      RowMap[RowKey].closeRow();
    }
  };
  const deleted = () => {
    Alert.alert('Are you sure you want to delete this post?', '', [
      {
        text: 'DELETE',
        onPress: () => {
          deletePost(item.category, item.key);
        },
      },
      {
        text: 'CANCEL',
        onPress: () => {},
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buton, styles.delete]}
        onPress={() => {
          onclose(rowMap, rowKey);
          deleted();
        }}>
        <Icon name="delete-forever-outline" size={48} color="tomato" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buton, styles.close]}
        activeOpacity={0.7}
        onPress={() => onclose(rowMap, rowKey)}>
        <Icon name="logout" size={40} color="tomato" />
      </TouchableOpacity>
    </View>
  );
};

export default Hidden;
