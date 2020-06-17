/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    width: width - 50,
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    backgroundColor: 'lightgrey',
  },
  view_buttons: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  view_social: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  social_button: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'lightgrey',
      alignItems: 'center',
      justifyContent:'center',
      marginHorizontal: 10,
  },
  buton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
export default styles;
