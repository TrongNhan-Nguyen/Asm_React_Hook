/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import ModalReducer from './ModalReducer';
import { PostReducer } from './PostReducer';
import DraweReducer from './DraweReducer';
const Reducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  post: PostReducer,
  drawer: DraweReducer,
});
export default Reducer;
