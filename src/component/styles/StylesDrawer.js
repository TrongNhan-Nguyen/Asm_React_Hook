/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: 'tomato',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: 'mediumseagreen',
    borderRadius: 35,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },
  preference: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
});
export default styles;
