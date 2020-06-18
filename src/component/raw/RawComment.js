/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/StylesComment';

const RawComment = (props) => {
  const {item} = props;
  const action = () => {
    console.log('action');
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.avatar} source={{uri: item.userPhoto}} />
      </View>
      <View style={styles.right}>
        <View style={styles.right_top}>
          <Text style={styles.name}>{item.userName}</Text>
          <Text style={styles.pubDate}>{item.pubDate}</Text>
        </View>
        <View style={styles.right_bottom}>
          <Text style={styles.content}>
            {item.content}
          </Text>
          <TouchableOpacity style={styles.view_action} onPress={action}>
            <Text style={styles.action}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RawComment;
