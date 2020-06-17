/* eslint-disable prettier/prettier */
const initialState = {
  isShow: false,
};
const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {isShow: true};
    case 'HIDE_MODAL':
      return {isShow: false};
    default:
      return state;
  }
};
export default ModalReducer;
