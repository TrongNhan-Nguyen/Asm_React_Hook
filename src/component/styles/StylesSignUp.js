/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'coral',
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  msg: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 10,
  },
  input: {
    width: width - 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    marginTop: 10,
  },
  view_buttons: {
    width: width,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
  },
});
export default styles;
