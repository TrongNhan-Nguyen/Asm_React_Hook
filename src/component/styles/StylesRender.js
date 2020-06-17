/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderColor: 'mediumseagreen',
    borderWidth: 1,
    backgroundColor: '#f2efed',
  },
  image: {
    flex: 1,
    height: 150,
    backgroundColor: 'mediumseagreen',
    position: 'relative',
  },
  bar: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    backgroundColor: 'lightgrey',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    opacity: 0.8,
    paddingHorizontal: 5,
  },
  pubDate: {
    fontStyle: 'italic',
  },
  title: {
    paddingHorizontal: 5,
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptions: {
    paddingHorizontal: 5,
  },
});
export default styles;
