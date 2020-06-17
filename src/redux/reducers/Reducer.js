/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import ModalReducer from './ModalReducer';
import { PostReducer } from './PostReducer';
const Reducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  post: PostReducer,
});
export default Reducer;
