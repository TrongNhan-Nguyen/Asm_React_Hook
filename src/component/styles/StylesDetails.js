/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: width,
  },
  title: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'lightgrey',
    marginTop: 10,
    color: 'black',
    borderRadius: 5,
  },
  descriptions: {
    height: 180,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'lightgrey',
    marginTop: 5,
    color: 'black',
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
});
export default styles;
