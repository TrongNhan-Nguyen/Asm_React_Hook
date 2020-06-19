/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
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
    margin: 0,
    padding: 0,
  },
  modal: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'tomato',
  },
  view_button: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    backgroundColor:'tomato',
    padding: 10,
    width: '30%',
    alignItems:'center',
    borderRadius: 20,
  },
});
export default styles;
