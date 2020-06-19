/* eslint-disable prettier/prettier */
const initialState = {
  isShow: false,
  keyPost: null,
};
const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {...state, isShow: true};
    case 'HIDE_MODAL':
      return {...state, isShow: false};
    case 'GET_KEY_POST':
      const newKey = action.payload;
      return {
        ...state,
        keyPost: newKey,
      };
    default:
      return state;
  }
};
export default ModalReducer;
