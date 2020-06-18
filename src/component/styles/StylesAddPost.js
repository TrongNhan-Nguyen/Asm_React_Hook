/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'tomato',
  },
  image: {
    width: width - 10,
    height: 150,
    backgroundColor: 'lightgrey',
    marginTop: 10,
    borderRadius: 5,
  },
  container_picker: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  picker: {
    height: 50,
    width: 150,
    padding: 0,
  },
  text_picker: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    width: width - 10,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  view_button: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    width: 100,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 20,
  },
  indicator: {
    marginTop: 20,
  },
});
export default styles;
