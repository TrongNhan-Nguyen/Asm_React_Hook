/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {dbPost} from '../database/Firebase';
import {useSelector} from 'react-redux';
import PostHidden from '../raw/PostHidden';
import PostRender from '../raw/PostRender';
import ListComment from './ListComment';
const ListPost = ({navigation}) => {
  const [list, setList] = useState([]);
  const admin = useSelector((state) => state.user.isAdmin);
  const category = useSelector((state) => state.post.category);
  const getData = () => {
    dbPost.child(category).on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push(child.val());
      });
      items.sort((a, b) => {
        return b.timeStamp - a.timeStamp;
      });
      setList(items);
    });
  };
  useEffect(() => {
    getData();
  }, [category]);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{category} News</Text>
      <SwipeListView
        data={list}
        renderItem={({item}) => <PostRender item={item} navigation={navigation} />}
        renderHiddenItem={(data, rowMap) => (
          <PostHidden data={data} rowMap={rowMap} />
        )}
        rightOpenValue={-140}
        disableLeftSwipe={admin ? false : true}
        disableRightSwipe={true}
      />
      <ListComment />
    </View>
  );
};
export default ListPost;
const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginVertical: 5,
    fontSize: 25,
  },
});
