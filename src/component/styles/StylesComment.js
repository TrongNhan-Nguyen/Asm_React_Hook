/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 4,
  },
  right_top: {
    flexDirection: 'row',
  },
  right_bottom: {
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'tomato',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  pubDate: {
    fontSize: 10,
    fontStyle: 'italic',
    position: 'absolute',
    right: 0,
    color: 'grey',
  },
  content: {},
  view_action: {position: 'absolute', bottom: 0, right: 5},
  action: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;
