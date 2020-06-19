/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'tomato',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'tomato',
    marginTop: 20,
  },
  input: {
    width: width - 30,
    paddingHorizontal: 20,
    backgroundColor: 'lightgrey',
    marginTop: 10,
    borderRadius: 5,
    color: 'black',
  },
  view_button: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    width: 150,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
