/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  text_close: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'tomato',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'tomato',
  },
  view_top: {
    flex: 1,
    alignItems: 'center',
  },
  view_middle: {
    flex: 8,
  },
  view_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    flex: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'tomato',
    margin: 3,
  },
  post: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
